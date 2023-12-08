const fs = require('fs');

let array = Array(100);

for (let i = 1; i <= array.length; i++)
{
    if (i%3 === 0 && i%5 === 0)
    {
        array[i-1] = 'BIGBANG';
    }
    else if (i%3 === 0)
        {
            array[i-1] = 'BIG';
        }
        else if (i%5 === 0)
            {
                array[i-1] = "BANG";
            }
            else 
            array[i-1] = i.toString();
}

const output = JSON.stringify(array);

try 
{
    fs.writeFileSync("output.json", output);
} 
catch (error) 
{
    console.error(error);
  
    throw error;
}

console.log("output.json written correctly");

