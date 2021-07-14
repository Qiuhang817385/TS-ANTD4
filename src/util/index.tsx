import { ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export const getHtmlStr = (content: string) => {
  // 获取 style 标签中的样式
  const styleContent = Array.from(document.styleSheets)
    // document.styleSheets 获取 css 资源时，可能会获取到 Link 标签中的 cssRules， Link 标签引用的 CDN 可能存在跨域问题会导致异常， 所以通过 href(Link 存在 href 属性) 判断是否为内联的 style 进行过滤，Link 标签中的 css 代码统一通过 linkStyle 获取
    .filter((item) => item.href === null)
    .map((item) => {
      return Array.from(item?.cssRules || [])
        .map((ruleItem) => {
          return ruleItem?.cssText
        })
        .join('\n')
    })
    .join('\n')

  // 获取 link css 中的样式
  const linkStyle = Array.from(document.getElementsByTagName('link') || [])
    .filter((item) => item.type === 'text/css' || item.rel === 'stylesheet')
    .map((item) => item.sheet)
  const linkStyleContent = linkStyle
    .map((item) => {
      return Array.from(item?.cssRules || [])
        .map((ruleItem) => {
          return ruleItem?.cssText
        })
        .join('\n')
    })
    .join('\n')

  return `
    <html>
      <head>
        <meta charset="utf-8" />
	      <meta name="apple-mobile-web-app-capable" content="yes" />
	      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
	      <meta name="format-detection" content="telephone=no" />
	      <meta name="format-detection" content="email=no" />
	      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
	      <title>OceanBase 集群健康巡检报告</title>
        <style>
          ${styleContent}
        </style>
        <style>
          ${linkStyleContent}
        </style>
      </head>
      <body>
        ${content}
        <script>
            window.onload = function () {
              let menuref = document.getElementById("menuref");
              let dragRef = document.getElementById("dragRef");
              let contentref = document.getElementById("contentref");
              let toggleMenuShow = document.getElementById("toggleMenuShow");

              // 展开折叠面板
              menuref.addEventListener("click", function (e) {
                if (typeof e.target.className === 'string') {
                  let tag1 = e.target && e.target.className && e.target.className.includes('ant-collapse-header');
                  let tag2 = e.target && e.target.className && e.target.className.includes(
                    'ant-collapse-header-self-define')
                  if (tag1 && !tag2) {
                    toggleC(e.target)
                    return
                  } else if (tag2) {
                    toggleC(e.target.parentElement)
                    return
                  }
                } else {
                  if (e.target.tagName === 'svg') {
                    arrow = e.target.parentElement;
                    let header = arrow.parentElement;
                    toggleC(header)
                    return
                  }
                }
              })
        
              function toggleC(header) {
                let prev = header.getAttribute("aria-expanded")
                if (prev === 'true') {
                  header.setAttribute("aria-expanded", "false")
                  header.getElementsByTagName("svg")[0].style.transform = "rotate(0deg)";
                } else {
                  header.setAttribute("aria-expanded", "true")
                  header.getElementsByTagName("svg")[0].style.transform = "rotate(90deg)";
                }
                let par = header.parentElement;
                par.classList.toggle("ant-collapse-item-active");
                let Sibling = header.nextElementSibling;
                Sibling.classList.toggle("ant-collapse-content-active")
                Sibling.classList.toggle("ant-collapse-content-inactive")
                Sibling.classList.toggle("ant-collapse-content-hidden")
              }

              // 拖拽
              dragRef.onmousedown = function (eve) {
                menuref.style.transition = 'width,min-width 0s'
                dragRef.style.transition = 'left 0s'
                contentref.style.transition = 'left 0s'
                let x,
                  t1,
                  menuListWidth,
                  off,
                  contentRight
                // 点击的地方
                x = eve.clientX
                menuListWidth = menuref.clientWidth
                contentRight = contentref.offsetLeft
                // 在mid内部鼠标点击的点距离当前盒子左边的距离
                t1 = eve.clientX - dragRef.offsetLeft
                off = dragRef.offsetLeft - menuListWidth
                document.onmousemove = function (e) {
                  let MIN = 200
                  let MAX = 480
                  let incremental = e.clientX - x
                  // let posiLeft = e.clientX - t1 - off
                  let posiLeft1 = e.clientX - t1
                  if (dragRef && menuref && contentref) {
                    if (posiLeft1 >= MIN && posiLeft1 <= MAX) {
                      dragRef.style.left = posiLeft1 + 'px'
                      menuref.style.width = menuListWidth + incremental + 'px'
                      menuref.style.minWidth =
                        menuListWidth + incremental + 'px'
                      contentref.style.left =
                        contentRight + incremental + 'px'
                    }
                  }
                }
                document.onmouseup = function (e) {
                  document.onmousemove = null
                  menuref.style.transition = 'width,min-width 0.3s'
                  contentref.style.transition = 'left 0.3s'
                }
                return false
              }

              // 展开收起导航面板,用于保留拖拽条的位置
              let preClientWidth = 0;
              toggleMenuShow.addEventListener("click", function (e) {
                menuref.style.transition = 'all 0.3s'
                dragRef.style.transition = 'all 0.3s'
                contentref.style.transition = 'left 0.3s'
                menuref.classList.toggle('showMenu')
                contentref.classList.toggle('showContent')
                dragRef.style.right = 0 + 'px';
                if (menuref.className.includes("showMenu")) {
                  dragRef.style.left = 0 + 'px';
                  // 保留当前的宽度
                  preClientWidth = menuref.clientWidth
                } else {
                  console.log('preClientWidth', preClientWidth);
                  // 这里的行为表现和线上的不一致，因为线上useEffect默认就是异步的操作，所以可以拿到渲染之后的值。
                  // 这里从折叠态 -> 展开态，始终是 0
                  dragRef.style.left = preClientWidth + 'px'
                }
              })

              a = Array.from(document.getElementsByTagName("span"))
              b = a.filter(item => item.className.includes("Analyze_data_link_title"))

              let topArray = b.map(item => item.parentElement.offsetTop);
              let allNav = Array.from(document.querySelectorAll(".ant-anchor-link"));

              document.getElementById("contentref").onscroll = function () {
                let index = topArray.findIndex(t => t >= (this.scrollTop - 0)) - 1;
                // 如果当前index没有激活，切换激活状态
                if (!allNav[index].className.includes("ant-anchor-link-active")) {
                  // 在激活前全部清除
                  for (let i = 0; i < allNav.length; i++) {
                    if (i !== index) {
                      allNav[i].classList.remove("ant-anchor-link-active")
                      allNav[index].firstElementChild.classList.remove("ant-anchor-link-title-active");
                    }
                  }
                  // 激活  i
                  allNav[index].classList.add("ant-anchor-link-active");
                  allNav[index].firstElementChild.classList.add("ant-anchor-link-title-active");
                } else {
                  return false
                }
              };
            }
        </script>
      </body>
    </html>
    `
}
export const downloadHtml = (html: string, fileName?: string) => {
  const a = document.createElement('a')
  const url = window.URL.createObjectURL(
    new Blob([html], {
      type: '',
    })
  )
  a.href = url
  a.download = fileName || `file.html`
  a.click()
  window.URL.revokeObjectURL(url)
}

export const exportElement = (element: ReactElement, fileName?: string) => {
  const content = renderToStaticMarkup(element)
  const htmlStr = getHtmlStr(content)
  downloadHtml(htmlStr, fileName)
}
