import React, { memo } from 'react'

type Props = {}

const DecimalColumn = (props: Props) => {
  console.log("decimal");
  return (
    <div>
      <span>.</span>
    </div>
  )
}

export default memo(DecimalColumn)