let arr = [];
let i =0 ;
let w = 3;
function setup() {
    createCanvas(windowWidth, windowHeight);
  arr = new Array(floor(width / w)); 
  for(let i =0 ;i<arr.length;i++)
    {
      arr[i] = random(height);
    }
  quickSort(arr,0,arr.length-1);
}


async function quickSort(arr,start,end)
{
  if(start<end)
    {
      let j = await partition(arr,start,end);
      await Promise.all([quickSort(arr,start,j),quickSort(arr,j+1,end)]);
    }
}

async function partition(arr,start,end)
{
  let pivot = arr[start];
  let i = start;
  let j = end;
  while(i<j)
    {
      while(arr[i] <= pivot)
        {
          i++;
        }
      while(arr[j] > pivot)
        {
          j--;
        }
      if(i<j)
        {
          await swap(arr,i,j);
        }
    }
    await swap(arr,start,j);
  return j;
}

function draw() {
  
  background(0);
  
  for(let i =0 ;i<width;i++)
    {  
     rect(i*w,height-arr[i],w,arr[i]);
    }
}

async function swap(arr , i , j)
{
  await sleep(25);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}