export default () => (
  <div>
    Hello there <span>MyBit</span>
    <style jsx>{`
      /* this style only applies to the span within lexical scope */
      span {
        color: red;
      }
    `}</style>
  </div>
)
