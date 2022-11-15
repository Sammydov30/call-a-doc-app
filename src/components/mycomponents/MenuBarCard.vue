<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoimg" alt="Calladoc" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<div class="menu">
			<router-link class="button" to="/patient/dashboard">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
			<a class="button" href="#">
                <span class="material-icons">business</span>
                <span class="text">Hospital</span>
            </a>
            <a class="button" href="#">
                <span class="material-icons">tty</span>
                <span class="text">Call</span>
            </a>
			<a class="button" href="#">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </a>
            <a class="button" href="#">
                <span class="material-icons">info</span>
                <span class="text">Notifications</span>
            </a>
		</div>

		<div class="flex"></div>
		
		<div class="menu menu-down">
			<a href="#" class="button">
				<span class="material-icons">add</span>
				<span class="text">New Appointment</span>
			</a>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoimg from "@/assets/img/logo.png";
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>


<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
aside {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #1f2933;
    width: calc(3.5rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;
        display: flex;
        justify-content: center;
		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: #1f2933;
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
                    color: #FFFFFF !important;
                    background: #007FDD;
                    border-radius: 10px;
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: #1f2933;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -0.5rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
            padding: 1rem 1.3rem;
            margin: 10px 0;

			.material-icons {
				font-size: 1.5rem;
				color: #1f2933;
				transition: 0.2s ease-in-out;
			}
			.text {
				color: #1f2933;
				transition: 0.2s ease-in-out;
			}

			&:hover {
                background-color: #007FDD;
                border-radius: 10px;

				.material-icons, .text {
					color: #FFFFFF !important;
				}
			}

			&.router-link-exact-active {
				background-color: #007FDD;
				border-right: 5px solid #1f2933;
                border-radius: 10px;

				.material-icons, .text {
					color: #FFFFFF !important;
				}
			}
		}
	}

    .menu-down {
		margin: 0 -0.5rem;

		.button {
            background: #C599FF;
            border-radius: 12px;
            padding: 0.4rem 1.3rem;

			.material-icons {
				font-size: 1.5rem;
				color: #FFFFFF;
				transition: 0.2s ease-in-out;
			}
			.text {
				color: #FFFFFF;
				transition: 0.2s ease-in-out;
			}

			&:hover {
                background-color: #833ae3;

				.material-icons, .text {
					color: #FFFFFF !important;
				}
			}

			&.router-link-exact-active {
				background-color: #833ae3;

				.material-icons, .text {
					color: #FFFFFF !important;
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: #64748b;
		}
	}

	&.is-expanded {
        width: 300px;
        position: absolute;
        z-index: 9999;

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>