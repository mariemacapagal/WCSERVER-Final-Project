<template>
<div class="edit">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Reservation</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
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
                    <button class="btn btn-danger btn-block">Submit</button>
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
            reservation: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-reservation/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.reservation = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-reservation/${this.$route.params.id}`;
            axios.put(apiURL, this.reservation).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>

<style scoped>
.edit {
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