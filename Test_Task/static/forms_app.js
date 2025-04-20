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
                // Явно сериализуем данные в JSON
                const payload = JSON.stringify({
                    image: this.image,
                    description: this.description.trim()
                });

                const response = await axios.post(
                    '/api/image/',
                    payload, // Отправляем JSON-строку
                    {
                        headers: {
                            'Content-Type': 'application/json' // Явно указываем Content-Type
                        }
                    }
                );

                if (response.status === 201 || response.status === 200) {
                    alert('Изображение успешно загружено!');
                    this.description = '';
                    this.image = null;
                    document.getElementById('imageInput').value = '';
                } else {
                    alert('Произошла ошибка при загрузке изображения.');
                }
            } catch (error) {
                console.error('Ошибка при загрузке изображения:', error.response || error);
                alert('Произошла ошибка при загрузке изображения. Пожалуйста, попробуйте снова.');
            } finally {
                this.isLoading = false;
            }
        }
    }
});
