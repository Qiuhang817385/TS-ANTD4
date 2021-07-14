import { Col, Row, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { data } from './data';
import style from './demo.module.scss';
interface Props {
  
}

const DemoTable = (props: Props) => {

  const tableref = useRef<HTMLDivElement>(null)


  /**
   * 1.通过控制单元格来变色
   * 2.通过动态的属性选择器来变色。这个row-key实际上是数据的key值，不具有通用性，
   * 需要对数据做一层key的处理，不过一般也是通过key来标识，但是不一定是数字
   */

  const columnsTotal = [
    {
      title: '主机 IP',
      dataIndex: 'ip',
      render(_: any, row: any,index:any) {
        return {
          children: row.ip,
          props: {
            rowSpan: row.rowSpan,
          },
        }
      },
      onCell(record:any,rowIndex:any){
        let is = Number(record.key)%2===0;
        return {
          className:!is? `${style.bg}`:''
        }
      }
    },
    {
      title: '所属 Zone',
      dataIndex: 'zone',
      render(_: any, row: any) {
        return {
          children: row.zone,
          props: {
            rowSpan: row.rowSpan,
          },
        }
      },
      onCell(record:any,rowIndex:any){
        let is = Number(record.key)%2===0;
        return {
          className:!is? `${style.bg}`:''
        }
      }
    },
    {
      title: '关联租户',
      dataIndex: 'assTenant',
      onCell(record:any,rowIndex:any){
        let is = Number(record.key)%2===0;
        return {
          className:!is? `${style.bg}`:''
        }
      }
    },
    {
      title: '数据分区数量',
      children:[
        {
          title: '开始',
          dataIndex: 'disk_start',
          onCell(record:any,rowIndex:any){
        let is = Number(record.key)%2===0;
        return {
          className:!is? `${style.bg}`:''
        }
      }
        },
        {
          title: '结束',
          dataIndex: 'disk_end',
          onCell(record:any,rowIndex:any){
        let is = Number(record.key)%2===0;
        return {
          className:!is? `${style.bg}`:''
        }
      }
        }
      ]
    },
    {
      title: 'leader 分区数量',
      children:[
        {
          title: '开始',
          dataIndex: 'leader_start',
          onCell(record:any,rowIndex:any){
        let is = Number(record.key)%2===0;
        return {
          className:!is? `${style.bg}`:''
        }
      }
        },
        {
          title: '结束',
          dataIndex: 'leader_end',
          onCell(record:any,rowIndex:any){
        let is = Number(record.key)%2===0;
        return {
          className:!is? `${style.bg}`:''
        }
      }
        }
      ]
    },
  ]

const [dataSource, setDataSource] = useState<any>([]);
const [loading, setLoading] = useState(false);

const createNewArr = (data: any, key: string) => {
  const ini = data.reduce((result: any, item: any) => {
    //首先将name字段作为新数组result取出
    if (!result.includes(item[key])) {
      result.push(item[key])
    }
    return result
  }, [])


  return ini.reduce((result: any, val: any) => {
    //将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
    const children = data?.filter((item: any) => item[key] === val) || []
    result = result.concat(
      children.map((item: any, index: any) => ({
        ...item,
        rowSpan: index === 0 ? children.length : 0, //将第一行数据添加rowSpan字段
      }))
    )
    return result
  }, [])
}


const createNewArr222 = (data: any, key: string) => {
  const ini = data.reduce((result: any, item: any) => {
    //首先将name字段作为新数组result取出
    if (!result.includes(item[key])) {
      result.push(item[key])
    }
    return result
  }, [])


  return ini.reduce((result: any, val: any) => {
    //将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
    const children = data?.filter((item: any) => item[key] === val) || []
    let total ={
      key:val,
      ip:'',
      zone:'',
      assTenant:'合计',
      // 期望这里传递一个值，循环push进去key为0，期望在初始化的时候就做，把key给记录下来。
      disk_start:0,
      disk_end:0,
      leader_start:0,
      leader_end:0,
    };

    for (const iterator of children) {
      total.disk_start+=iterator.disk_start;
      total.disk_end+=iterator.disk_end;
      total.leader_start+=iterator.leader_start;
      total.leader_end+=iterator.leader_end;
    }
    children.push(total)
    result = result.concat(
      children.map((item: any, index: any) => ({
        ...item,
      }))
    )
    return result
  }, [])
}

  useEffect(() => {
    setLoading(true);
    /**
     * 1.数据抹平
     */
    const newData = data.map((d,index)=>{
        // const b = Object.keys(d).filter(item=>typeof d[item]==='object');
        const b = Object.keys(d).reduce((newData:any,key)=>{
          if(typeof d[key]==='object'){
            Object.keys(d[key]).forEach((item:any)=>{
              let newKey = `${key}_${item}`;
              newData[newKey] =  d[key][item]
            })
          }
          return newData;
        },{});
        
        // let c = b.map(key=>{
        //   let k = `${key}_start`;
        //   return {
        //     k:key
        //   }
        // })
      return {
        ...d,
        ...b
      }
    })
    
    /**
     * 2.计算合计
     */
    let c = createNewArr222(newData,'key')
    
    /**
     * 3.计算rowspan
     */
    // let d = createNewArr(newData,'key');
    let d = createNewArr(c,'key');
    setLoading(false)
    setDataSource(d)
    // setDataSource(newData)
  }, []);

  // 计算合计
  return (
    <>
      <Row>
        <Col span={24}>
          <div className={style.container}>
          <Table
            loading={loading}
            columns={columnsTotal || []}
            dataSource={dataSource || []}
            bordered
            size="small"
            pagination={false}
            />
            </div>
        </Col>
      </Row>
    </>
  )
}

export default DemoTable
