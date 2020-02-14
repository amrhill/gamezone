<?php
    require('Date.php');
    $date = new Date();
    $year = date('Y');
    $month = date('m');
    $day = date('d');
?>
<div class="calendar-container">
    <!-- <div class="calendar-title">
        <h1>CALENDRIER</h1>
    </div> -->
    <div class="calendar-main">
        <?php
            for($m=0;$m<count($date->months);$m++):
        ?>
                <div class="calendar-current-month">
                <div class="calendar-current-month-title">
                    <h3><?=$date->months[$m]?></h3>
                </div>
                <div class="calendar-current-month-bloc">
                    <div class="calendar-current-month-day">
                        <?php
                            for($d=0;$d<count($date->days);$d++):
                        ?>
                                <div><?= substr($date->days[$d], 0, 1) ?><br></div>
                        <?php
                            endfor;
                        ?>
                    <?php
                        for($n=1;$n<=31;$n++){
                            echo '<div>'.$n.'</div>';
                        }
                    ?>
                </div>
            </div>
        <?php
            endfor;
        ?>
    </div>
</div>