import React from 'react'
import cx from 'classnames';
import './table.scss'
export interface ICloumns {
  label: string
  name: string
  fix?: string
}

interface Props {
  cloumns: ICloumns[]
  data: any
}

const Table = (props: Props) => {
  const { cloumns, data } = props;
  const renderTheader = () => {
    return cloumns.map((cloumn, index) => {
      return <th
        className={
          cx(
            cloumn.fix === 'left' && `table-sticky-left${index}`,
            cloumn.fix === 'right' && `table-sticky-right`
          )
        }
      >
        {
          cloumn.label
        }
      </th>
    })
  }


  const renderTbody = () => {
    return data.map((row: any) => {
      return (
        <tr key={row.key}>
          {
            cloumns.map((cloumn, index) => {
              return <>
                <td
                  className={cx(
                    cloumn.fix === 'left' && `table-sticky-left${index}`,
                    cloumn.fix === 'right' && `table-sticky-right`
                  )}
                >
                  {row[cloumn.name]}
                </td>
              </>
            })
          }
        </tr>
      )
    })
  }


  return (
    <div>
      <div className="table-wrapper">
        <table className="table-container">
          <thead>
            <tr>{renderTheader()}</tr>
          </thead>
          <tbody>{renderTbody()}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
