<template>
<div class="app">
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand float-left">Urban Steak</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reservation">Reservation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Reservation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/aboutus">About us</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<style scoped>
.navbar{
    background-color:black;
}
a, .nav-link {
    color: beige;
}
</style>