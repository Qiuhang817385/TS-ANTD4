import React from 'react'
import Table from './Table';
import namor from 'namor';
interface Props {

}

const cloumns = [
  {
    label: '姓名',
    name: 'name',
    fix: 'left',
  },
  {
    label: '年龄',
    name: 'id',
    fix: 'left',
  },
  {
    label: '访问量',
    name: 'visits',
  },
  {
    label: '进度',
    name: 'progress',
  },
  {
    label: '描述',
    name: 'desc',
  },
  {
    label: '年龄',
    name: 'age',
  },
  {
    label: '访问量',
    name: 'visits',
  },
  {
    label: '进度',
    name: 'progress',
  },
  {
    label: '描述',
    name: 'desc',
  },
  {
    label: '访问量',
    name: 'visits',
  },
  {
    label: '进度',
    name: 'progress',
  },
  {
    label: '描述',
    name: 'desc',
  },
  {
    label: '描述2',
    name: 'desc',
    fix: 'right',
  },
]

const Index = (props: Props) => {
  const data = React.useMemo(() => [], [])

  const newPerson = () => {
    return {
      name: namor.generate({ words: 1, numbers: 0 }),
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      desc: namor.generate({ words: 4, numbers: 0 }),
      progress: Math.floor(Math.random() * 100),
    }
  }

  const range = (len: number) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i)
    }
    return arr
  }
  function makeData(...lens: number[]) {
    console.log(`lens`, lens);
    // lens:[50]
    const makeDataLevel = (depth: number = 0): any => {
      console.log(`depth`, depth);
      // [50][0]=>50
      const len = lens[depth];
      return range(len).map(d => {
        return {
          id: d,
          ...newPerson(),
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
        }
      });
    }
    return makeDataLevel();
  };

  const make = (...lens: number[]) => {
    const makeDataLevel = (depth: number = 0): any => {
      // 第一次始终是 0 
      const len = lens[depth]
      // range是一个长度为len的数组，奥卧槽，
      // 第二个其实也是数组的长度，个数是深度
      return range(len).map(i => ({
        id: i,
        children: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      }))
    }
    return makeDataLevel();
  }

  // 创建一个深度为2，长度分别是5，2的嵌套规则的树形结构。
  // const b = make(5, 2);
  // console.log(`b`, b);


  // subRows有几个元素。
  const a = makeData(10)
  console.log(`a`, a);

  return (
    <div>
      <Table cloumns={cloumns} data={a} />
    </div>
  )
}

export default Index
