const { useState } = React;

function useQueue() {
  const [queue, setQueue] = useState([]);

  const queueAdd = (ele) => {
    ele = ele.trim();
    if (ele === "" || ele == null) return;
    setQueue([ele, ...queue]);
  };

  const queuePop = (ele) => {
    let temp = queue.slice();
    let new_q = temp.pop();
    setQueue((s) => temp);
  };


  return {
    queue,
    queueAdd,
    queuePop,
  };
}

