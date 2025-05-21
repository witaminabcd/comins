class SmoothScroll {
    protected selector: NodeListOf<Element>;

    constructor(selector: string) {
        this.selector = document.querySelectorAll(selector);

        this.init();
    }

    init() {
        for (const item of this.selector as any) {

            if (item.dataset.noScroll) {
                return;
            }

            item.addEventListener('click', (e: Event) => {
                e.preventDefault();

                let target: String;

                if (item.dataset.target) {
                    target = item.dataset.target;
                }
                else {
                    target = item.getAttribute('href');
                }

                document.querySelector(target as any).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    }
}

export default SmoothScroll;

