<template>
<body class="list">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Reservation</th>
                        <th>Time of Reservation</th>
                        <th>Number of Persons/Diners</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reservation in Reservations" :key="reservation._id">
                        <td>{{ reservation.name }}</td>
                        <td>{{ reservation.email }}</td>
                        <td>{{ reservation.phone }}</td>
                        <td>{{ reservation.date }}</td>
                        <td>{{ reservation.time }}</td>
                        <td>{{ reservation.numberOfDiners }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: reservation._id }}" class="btn btn-success">Edit</router-link>
                            <button @click.prevent="deleteReservation(reservation._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Reservations: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Reservations = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteReservation(id){
                let apiURL = `http://localhost:4000/api/delete-reservation/${id}`;
                let indexOfArrayItem = this.Reservations.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Reservations.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style scoped>
.list {
    width: 100%;
    height: 100%;
    background-image: url(../assets/list.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 10%;
    position: fixed;
    left: 0; right: 0; top: 55px;
    overflow-y: scroll;
}

.row {
    width: 100%;
    margin: 0 auto;
    padding-top: 2%;
    text-align: center;
}

thead {
    background-color: black;
    color: beige;
}

table {
    background-color: rgba(231, 227, 227, 0.5);
}
</style>