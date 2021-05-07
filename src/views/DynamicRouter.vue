<template>
    <div>randomuser 官網：
			<a href="https://randomuser.me/">https://randomuser.me/</a>
		</div>
		固定 seed：{{ fixedSeed }}
		隨機 seed：{{ randomSeed }}
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			fixedSeed: '',
			randomSeed: '',
		};
	},

	created() {
		const seed = this.$route.params.id;
		axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
			this.fixedSeed = seed;
			console.log(res, res.data.info.seed);
		});

		axios.get('https://randomuser.me/api/').then((ress) => {
			console.log(ress, ress.data.info.seed);
			this.randomSeed = ress.data.info.seed;
		});
	},
};
</script>
