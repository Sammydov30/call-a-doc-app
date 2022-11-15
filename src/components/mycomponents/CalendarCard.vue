<template>
    <div class="containerr mt-5">
        <div class="calendar">
          <div class="month">
            <i class="fas fa-angle-left prev"></i>
            <div class="date">
              <h1></h1>
              <p v-show="ss"></p>
            </div>
            <i class="fas fa-angle-right next"></i>
          </div>
          <div v-show="ss" class="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div class="days"></div>
        </div>

        <div class="time-area pb-5 px-3">
            <TimeAppointmentCard :appointment="appa" time="8:00 am" description="Appointment with Dr Amachi" type="1" />
            <TimeAppointmentCard :appointment="appb" time="9:00 am" />
            <TimeAppointmentCard :appointment="appa" time="10:00 am" description="Appointment with Dr Okpara" type="2" />
        </div>
    </div>
</template>

<script>
import TimeAppointmentCard from './TimeAppointmentCard.vue'
export default {
  name: "CalendarCard",
  components: {
    TimeAppointmentCard,
  },
  data() {
    return {
        date: new Date(),
        ss: false,
        appa: true,
        appb: false,
    }
  },
  mounted(){

    document.querySelector(".prev").addEventListener("click", () => {
        this.date.setMonth(this.date.getMonth() - 1);
        this.renderCalendar();
    });

    document.querySelector(".next").addEventListener("click", () => {
        this.date.setMonth(this.date.getMonth() + 1);
        this.renderCalendar();
    });

    this.renderCalendar();
  },
  methods: {
    renderCalendar () {
        this.date.setDate(1);

        const monthDays = document.querySelector(".days");

        const lastDay = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
        ).getDate();

        const prevLastDay = new Date(
            this.date.getFullYear(),
            this.date.getMonth(),
            0
        ).getDate();

        const firstDayIndex = this.date.getDay();

        const lastDayIndex = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        document.querySelector(".date h1").innerHTML = months[this.date.getMonth()];

        document.querySelector(".date p").innerHTML = new Date().toDateString();

        let days = "";

        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            if (
            i === new Date().getDate() &&
            this.date.getMonth() === new Date().getMonth()
            ) {
            days += `<div class="today">${i}</div>`;
            } else {
            days += `<div>${i}</div>`;
            }
        }

        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;
            monthDays.innerHTML = days;
        }
    },
  },
};
</script>


<style scoped>

  .containerr {
    width: 100%;
    background-color: #FFFFFF;
    color: #000000 !important;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 30px 10px 10px;
    gap: 20px;
    border: 1px solid #F5F7FA;
    border-radius: 16px;
  }
  
  .calendar {
    width: 100%;
  }
  
  .month {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    text-align: center;
  }
  
  .month i {
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .month h1 {
    font-size: 100%;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 1rem;
  }
  
  .month p {
    font-size: 1rem;
  }
  
  .weekdays {
    width: 100%;
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
  }
  
  .weekdays div {
    font-size: 12px;
    font-weight: 400;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .days {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem;
  }
  

</style>