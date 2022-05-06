<template>
<div class="create">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Add New Reservation</h3><br/>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label id="name">Name</label>
                    <input type="text" class="form-control" v-model="reservation.name" required>
                </div><br/>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="reservation.email" required>
                </div><br/>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="reservation.phone" required>
                </div><br/>
                <div class="form-group">
                    <label>Date of Reservation</label>
                    <input type="date" class="form-control" v-model="reservation.date" required>
                </div><br/>
                <div class="form-group">
                    <label>Time of Reservation</label>
                    <input type="time" class="form-control" v-model="reservation.time" required>
                </div><br/>
                <div class="form-group">
                    <label>Number of Persons/Diners</label>
                    <input type="number" id="quantity" name="Number of Person" min="1" max="20" class="form-control" v-model="reservation.numberOfDiners" required>
                </div><br/>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                reservation: {
                   name: '',
                   email: '',
                   phone: '',
                   date: '',
                   time: '',
                   numberOfDiners: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-reservation';
                
                axios.post(apiURL, this.reservation).then(() => {
                  this.$router.push('/view')
                  this.reservation = {
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    numberOfDiners: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>
.create {
    width: 100%;
    height: 100%;
    background-image: url(../assets/create_edit.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 10%;
    position: fixed;
    left: 0; right: 0; top: 55px;
    overflow-y: scroll;
    color: beige;
}
h3 {
    padding-top: 5%;
}
</style>