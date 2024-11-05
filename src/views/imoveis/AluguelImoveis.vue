<template>
	<v-container class="pa-0">
		<h2 class="ml-6">Sites de Aluguel de Imóveis</h2>

		<!-- Slide Group -->
		<v-slide-group v-model="activeSlide" class="slide-group-container bg-white rounded-xl" :show-arrows="!isMobile">
			<v-slide-item v-for="(imovel, index) in imoveis" :key="index" class="slide-item" elevation="5">
				<v-sheet color="green darken-4" class="imoveis-card d-flex flex-column align-center justify-center rounded-xl"
					elevation="5">
					<a :href="imovel.link" target="_blank">
						<img class="bg-white pa-2 rounded" width="180px" :src="imovel.icon" alt="Ícone do Imovel" />
					</a>
					<!-- <h3 class="imoveis-title text-h6 text-white">{{ imovel.name }}</h3> -->
				</v-sheet>
			</v-slide-item>
		</v-slide-group>
	</v-container>
</template>

<script setup>
import { ref, inject } from 'vue';

const isMobile = inject('isMobile');
const navigateTo = inject('navigateTo');
const activeSlide = ref(0); // Slide atual

// Lista de imoveis recomendados
const imoveis = ref([
	{
		name: 'Custo Justo',
		category: 'Imoveis',
		icon: 'https://www.custojusto.pt/_next/static/media/logo1.c12d6d82.svg',
		description: 'Aluguel/Arrendamento de Imóveis',
		link: 'https://www.custojusto.pt/braga/imobiliario',
	},
	{
		name: 'Idealista',
		category: 'Imoveis',
		icon: 'https://st3.idealista.pt/static/common/img/idealista.svg',
		description: 'Aluguel/Arrendamento de Imóveis',
		link: 'https://www.idealista.pt/',
	},
	{
		name: 'Imovirtual',
		category: 'Imoveis',
		icon: 'https://statics2.imovirtual.com/fp_statics/images/logo/imovirtual2.svg',
		description: 'Aluguel/Arrendamento de Imóveis',
		link: 'https://www.imovirtual.com/',
	},
	{
		name: 'Remax',
		category: 'Imoveis',
		icon: 'https://www.remax.pt/_next/static/media/logo-remaxpt.2231d959.svg',
		description: 'Aluguel/Arrendamento de Imóveis',
		link: 'https://www.remax.pt/pt/arrendar/braga',
	}
]);
</script>

<style scoped>
.slide-group-container {
	display: flex;
	overflow-x: auto;
	border-radius: 8px;
	justify-content: center;
}

.slide-item {
	min-width: 300px;
	padding: 16px;
	box-sizing: border-box;
}

.imoveis-card {
	width: 100%;
	min-height: 150px;
	padding: 16px;
	text-align: center;
}

@media screen and (max-width: 1024px) {
	.slide-item {
		padding: 10px;
		box-sizing: border-box;
	}

}
</style>
