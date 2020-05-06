<template>
  <div class="profile">
    <section class="section">
        <figure class="image is-128x128">
            <img src="https://i.pinimg.com/originals/c2/95/9c/c2959c63b540853bde6e90180359d8ce.jpg">
        </figure>
        <div class="content">
            <h1 class="title">Bobby Smith</h1>
                        <p>Kingston, NY</p>
        </div>
    </section>
    <section>
        <div class="title">Exercise Log</div>
        <div class="card">
         <header class="card-header">
            <p class="card-header-title">
                Crunches
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </a>
         </header>
        <div class="card-content">
            <div class="content">
                Lie faceup with knees bent and hands behind head. Inhale and, as you exhale, draw your belly button in toward your spine. Press lower back into the floor and lift upper back off the floor and slightly forward. Lower to return to the starting position. That’s 1 rep.
            </div>
        </div>
    <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
    </footer>
</div>
        <div class="card">
         <header class="card-header">
            <p class="card-header-title">
                Vertical leg crunch
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </a>
         </header>
        <div class="card-content">
            <div class="content">
                Lie faceup with lower back pressed into the floor. Place hands behind your head. Extend legs straight up, crossed at ankles with a slight bend in knees. Contract abdominal muscles by lifting torso toward knees. Make sure to keep chin off your chest with each contraction. Exhale as you contract upward, and inhale as you return to the starting position.
            </div>
        </div>
    <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
    </footer>
</div>
        <div class="card">
         <header class="card-header">
            <p class="card-header-title">
                Flutter kick
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </a>
         </header>
        <div class="card-content">
            <div class="content">
                Lie faceup with legs extended, toes pointed, and hands tucked under glutes to support lower back. Lift both legs a few inches off the floor and alternately kick legs up and down.
            </div>
        </div>
    <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
    </footer>
</div>
        <div class="card">
         <header class="card-header">
            <p class="card-header-title">
                Plank jack
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </a>
         </header>
        <div class="card-content">
            <div class="content">
                Start in a modified plank position, balancing on forearms (elbows aligned under shoulders) and toes. Tighten abs so your body is straight from head to heels. Keeping torso tight, hop feet out wide. Hop feet back to the starting position and repeat.
            </div>
        </div>
    <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
    </footer>
</div>
    </section>    
  </div>
</template>

<script>
import {CurrentUser} from '../models/Users'
export default {
    data: () => ({
        name: CurrentUser.name,
        username: CurrentUser.username,
        profilePic: CurrentUser.profilePic
        })
}
</script>
