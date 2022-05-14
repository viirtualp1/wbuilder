const app = new Vue({
    el: '#app',

    data: {
        colorText: 'black',
        fontSizeText: 20,
        textValue: '',

        text: {
            color: 'black',
            fontSize: '20px'
        }
    },

    methods: {
        selectStyleText: function (value) {
            document.querySelector('.created').style.fontSize = `${value ? this.fontSizeText += 5 : this.fontSizeText -= 5}px`;
            if (value == 'reset') document.querySelector('.created').style.fontSize = `${this.fontSizeText = 20}px`;
        },

        addText: function () {
            const canvas = document.querySelector('.canvas');
            const text = document.createElement('p');

            text.className = "created";
            text.innerText = this.textValue;
            canvas.appendChild(text);
        }
    }
})

