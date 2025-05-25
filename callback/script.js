function sampledata(id, nextsample) {
  setTimeout(() => {
    console.log("the data is", id);
    if (nextsample) {
      nextsample();
    }
    if(id===103){
      console.error("ann error");
    }
  }, 2000);
}

sampledata(100, () => {
  sampledata(101, () => {
    sampledata(102, () => {
      sampledata(103, () => {
        sampledata(104, () => {
          sampledata(105);
        });
      });
    });
  });
});
