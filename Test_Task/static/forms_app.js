new Vue({
    el: '#forms_app',
    data: {
        image: null,
        description: '',
        isLoading: false
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.image = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        async submitForm() {
            if (!this.image || !this.description.trim()) {
                alert('Пожалуйста, выберите изображение и введите описание!');
                return;
            }

            this.isLoading = true;
            try {
                const formData = new FormData();
                formData.append('image', this.image);
                formData.append('description', this.description.trim());

                const response = await axios.post('/api/image/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                alert('Изображение успешно загружено!');
                this.description = '';
                this.image = null;
            } catch (error) {
                console.error('Ошибка при загрузке изображения:', error);
                alert('Произошла ошибка при загрузке изображения. Пожалуйста, попробуйте снова.');
            } finally {
                this.isLoading = false;
            }
        }
    }
});