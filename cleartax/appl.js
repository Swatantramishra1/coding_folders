const x = `
  <html>
    <body>
      <div>world</div>
      <div>
        <div>hello</div>
      </div>
    </body>
  </html>
`;

console.log(x.split(">"));


// [div,body,html]
// html 
//     body 
//         div 
//             world 
//         div
//             div
//                 hello 

const retVal = {
  type: 'html',
  children: [
    {
      type: 'body',
      children: [
        {
          type: 'div',
          children: ['world']
        },
        {
          type: 'div',
          children: [
            {
          type: 'div',
          children: ['world']
        }
          ]
        }
      ]
    }
  ]
}

const resultObj = {};
const tempArr = string.split(">");
function parse(tempArr,curIndex) {
  // return tree
  for (let i = curIndex; i < tempArr.length; i++) {
    
  
  }
}

function removeTag(str) {
    return 
}