$( document ).ready(function(){
    var sum=0,x=0;
    var arr=[];
    $("#btn_submit").click(function(){
        $('#form-list :input').each(function(){
            if ($.trim($(this).val()) == "") {
                $(this).addClass("makered");
                $("#txt_box1").removeClass("makered");
                $("#txt_box2").removeClass("makered");
            }
            else{
                $(this).removeClass("makered");
                sum=sum+1;
            }
            $('input:text,select,input[type="number"]').blur(function(){
                if($(this).val()){
                    $(this).removeClass("makered");
                }
            });
        });
        $('input[type="text"],input[type="number"],select').each(function(){
            arr.push($(this).val());  
        });
        if(sum>=16){
            for(var i=0;i<=arr.length;i++){
                if(i==0){
                    $("#txt_box1").replaceWith("<div class='label1'><label>Account Number : " + arr[i] + "</label></div>");
                }
                else if(i==1){
                    $("#txt_box2").replaceWith("<div class='label1'><label>Dates of service : " + arr[i] + "</label></div>");
                }
                else if(i==2){
                    $("#txt_box3").replaceWith("<div class='label2'><label>Patient Last Name : " + arr[i] + "</label></div>");
                }
                else if(i==3){
                    $("#txt_box4").replaceWith("<div class='label2'><label>Patient First Name : " + arr[i] + "</label></div>");
                }
                else if(i==4){
                    $("#txt_box5").replaceWith("<div class='label2'><label>Patient Middle Initial : " + arr[i] + "</label></div>");
                }
                else if(i==5){
                    $("#txt_box6").replaceWith("<div class='label3'><label>Address : " + arr[i] + "</label></div>");
                }
                else if(i==6){
                    $("#txt_box7").replaceWith("<div class='label3'><label>City : " + arr[i] + "</label></div>");
                }
                else if(i==7){
                    $("#txt_box8").replaceWith("<div class='label3'><label>State : " + arr[i] + "</label></div>");
                }
                else if(i==8){
                    $("#txt_box9").replaceWith("<div class='label3'><label>Zip : " + arr[i] + "</label></div>");
                }
                else if(i==9){
                    $("#txt_box10").replaceWith("<div class='label3'><label>Country : " + arr[i] + "</label></div>");
                }
                else if(i==10){
                    $("#txt_box11").replaceWith("<div class='label4'><label>Month : " + arr[i] + "</label></div>");
                }
                else if(i==11){
                    $("#txt_box12").replaceWith("<div class='label4'><label>Date : " + arr[i] + "</label></div>");
                }
                else if(i==12){
                    $("#txt_box13").replaceWith("<div class='label4'><label>Year : " + arr[i] + "</label></div>");
                }
                else if(i==13){
                    $("#txt_box14").replaceWith("<div class='label4'><label>Martial Status : " + arr[i] + "</label></div>");
                }
                else if(i==14){
                    $("#txt_box15").replaceWith("<div class='label4'><label>Email Address : " + arr[i] + "</label></div>");
                }
                else if(i==15){
                    $("#txt_box16").replaceWith("<div class='label5'><label>Primary Phone Number : " + arr[i] + "</label></div>");
                }
                else if(i==16){
                    $("#txt_box17").replaceWith("<div class='label5'><label>Select Phone Number Info : " + arr[i] + "</label></div>");
                }
                else if(i==17){
                    $("#txt_box18").replaceWith("<div class='label6'><label>Health Insurance at date of service : " + arr[i] + "</label></div>");
                }
            }
        }
    });
    var x=$(".family-details");
    $("#btn_add").click(function () {
        $(x).prepend(`<div><input type="text" class="txt_family" id="txt_familymember" name="txt_familymember" placeholder="Name of Family Member"/>
        <label>Date of Birth</label>
        <select name="month" class="txt_common_box3" id="txt_box11">
            <option disabled selected hidden>Month</option>
            <option value="01">January</option> 
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
        <select name="day" class="txt_common_box3" id="txt_box12">
            <option disabled selected hidden>Date</option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
        </select>
        <select name="year" class="txt_common_box3" id="txt_box13">
            <option disabled selected hidden>Year</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
        </select>
        <input type="text" class="txt_family" id="txt_relation" name="txt_relation" placeholder="Relationship to patient"/>
        <input type="button" class="btn_remove_member" class="remove" id="btn_remove" name="btn_remove" value="Remove Member"/><br></div>`);
      });
    $(document).on("click","#btn_remove",function() {
        $(this).parent(x).remove();
    });
}); 