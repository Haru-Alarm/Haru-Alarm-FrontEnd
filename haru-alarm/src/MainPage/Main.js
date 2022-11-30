import './Main.css';

// 메인 페이지
function Main() {
  return (
    <>  
        <div class='content'>
            <div class='title'>HARU ALARM</div>
            <form class='search' onSubmit={event=>{
             event.preventDefault();}}>
                <p><input type="text" name="depart" placeholder="depart" /></p>
                <p><input type="text" name="arrival" placeholder='arrival' /></p>
                <p><input type="text" name="arrivalTime" placeholder='arrivalTime' /></p>
                <p><input type="submit" value=">>" /></p>
            </form>
        </div>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </>
  );
}

export default Main;