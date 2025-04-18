new Vue({
    el: '#image_gallery',
    data: {
        images: []
    },
    methods: {
        async loadImageData() {
            try {
                const response = await axios.get('/api/image/');
                this.images = response.data;
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        },
        async deleteImage(imageId) {
            try {
                await axios.delete(`/api/image/${imageId}/`);
                this.images = this.images.filter(image => image.id !== imageId);
            } catch (error) {
                console.error('Error deleting image:', error);
            }
        }
    },
    mounted() {
        this.loadImageData();
    }
});