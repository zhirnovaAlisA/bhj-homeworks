let counter_positive = 0;
let counter_negative = 0;
const getHole = index => document.getElementById(`hole${index}`);

for (let i=1; i<=9; i++){
    const hole = getHole(i);

    hole.onclick = function(){
        if (getHole(i).className == "hole"){
            counter_negative += 1;
            document.getElementById("lost").textContent = Number(document.getElementById("lost").textContent) + 1;
        }
        else{
            counter_positive += 1;
            document.getElementById("dead").textContent = Number(document.getElementById("dead").textContent) + 1;

        }
        if ((counter_positive == 10) || (counter_negative == 5)){
            counter_negative = 0;
            counter_positive = 0;
            document.getElementById("lost").textContent = 0;
            document.getElementById("dead").textContent = 0;
            playing = false;
            alert("Игра окончена!");
        }
    }

}
(() => {
    let playing = true,
      activeHole = 1;
  
    const stop = () => playing = true,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 9 );
        activateHole( activeHole );
        next();
      }, 800 );
  
    next();
  })();
  