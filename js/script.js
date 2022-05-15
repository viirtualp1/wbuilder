const app = new Vue({
    el: '#app',

    data: {
        elemValue: '',
        createdElements: [],

        posElem: 'left',
        colorText: '',

        currentIndexEditStyleElem: 0, 
        currentIndexElem: 0,
    },

    methods: {
        selectFontSize: function (type, value) {
            const elem = document.getElementById(`${type}-${this.currentIndexEditStyleElem}`);

            elem.style.fontSize = `${value ? this.createdElements[this.currentIndexEditStyleElem].fontSize += 5 : this.createdElements[this.currentIndexEditStyleElem].fontSize -= 5}px`;
            if (value == 'reset') elem.style.fontSize = `${this.createdElements[this.currentIndexEditStyleElem].fontSize = 20}px`;
        },

        selectMargin: function (type, value) {
            const elem = document.getElementById(`${type}-${this.currentIndexEditStyleElem}`);

            if (value == 'reset') {
                elem.style.margin = 0;
                elem.style.marginBottom = '1rem';
            } else {
                switch (this.posElem) {
                    case 'left': elem.style.marginLeft = `${value ? this.createdElements[this.currentIndexEditStyleElem].margin.left += 10 : this.createdElements[this.currentIndexEditStyleElem].margin.left -= 5}px`; break;
                    case 'right': elem.style.marginRight = `${value ? this.createdElements[this.currentIndexEditStyleElem].margin.right += 10 : this.createdElements[this.currentIndexEditStyleElem].margin.right -= 5}px`; break;
                    case 'top': elem.style.marginTop = `${value ? this.createdElements[this.currentIndexEditStyleElem].margin.top += 10 : this.createdElements[this.currentIndexEditStyleElem].margin.top -= 5}px`; break;
                    case 'bottom': elem.style.marginBottom = `${value ? this.createdElements[this.currentIndexEditStyleElem].margin.bottom += 10 : this.createdElements[this.currentIndexEditStyleElem].margin.bottom -= 5}px`; break;
                }
            }
        },

        selectColor: function (type) {
            const elem = document.getElementById(`${type}-${this.currentIndexEditStyleElem}`);

            elem.style.color = this.colorText;
        },

        selectTemplateStyle: function (typeStyle) {
            const elem = document.getElementById(`button-${this.currentIndexEditStyleElem}`);

            elem.className = `btn btn-${typeStyle}`;
        },

        addElem: function (type) {
            const canvas = document.querySelector('.canvas');
            const elem = document.createElement(type);
            const button = document.createElement('button');
            const iconEdit = document.createElement('i');
            const div = document.createElement('div');

            div.style.display = "block";

            elem.innerText = this.elemValue;
            elem.style.fontSize = "20px";
            elem.id = `${type}-${this.currentIndexElem}`;
            elem.value = this.currentIndexElem;
            elem.style.display = "inline-block";

            this.createdElements.push({
                elemValue: this.elemValue,
                fontSize: 20,
                color: '#000',
                margin: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }
            });

            iconEdit.className = "fas fa-pencil";
            iconEdit.innerText = "";

            button.className = "btn btn-outline-primary buttonEdit";
            button.style.display = "inline-block";

            button.onclick = () => this.currentIndexEditStyleElem = elem.value;

            div.appendChild(elem);
            div.appendChild(button);
            button.appendChild(iconEdit);

            canvas.appendChild(div);

            this.currentIndexElem += 1;
        }
    }
})

