import React, { useState } from 'react'
import { TreeSelect } from 'antd';
const { SHOW_PARENT, SHOW_ALL, SHOW_CHILD, TreeNode } = TreeSelect
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];


interface Props {

}

const Index = (props: Props) => {

  const [value, setValue] = useState([]);

  const onChange = (value: React.SetStateAction<never[]>) => {
    console.log('onChange ', value);
    setValue(value);
  };

  const tProps = {
    treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    // showCheckedStrategy: SHOW_PARENT,
    // showCheckedStrategy: SHOW_CHILD,
    showCheckedStrategy: SHOW_ALL,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };

  return (
    <div>
      <TreeSelect {...tProps} />
    </div>
  )
}

export default Index
