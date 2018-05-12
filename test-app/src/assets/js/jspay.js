ChangeDreamToPiad(){
     // check for pending keeper for alloacted dream
     if (this.dream.status === "allocated") {
      let numberOfPendings = 0;
      for(let keeper of this.dream.keepers.keepers ){
        let status = keeper.status;
        if (status == 'pending') {
            numberOfPendings++;
        }
      }
	 }
      if (numberOfPendings == 0) {
          // All dreams are paid  - change dream status to paid
          let data = {
              id: parseInt(this.dream.id)
          };
          this.dreamDetailsService.updateDreamToPaid(data)
          .subscribe((res)=>{
if(res){
  alert("Dream status changed to : Paid");
}else{
  if (this.dream.status == 'allocated') {
  //  CountDownTimer($scope.dream.timeAllocated, "timeCountDown");
}
}

		  }
	  }
}
