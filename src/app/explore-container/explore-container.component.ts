import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  userData: any;
  welcomeMessage: string = "";

  ngOnInit() {
    window.addEventListener('message', (event) => {
      if (event.data.includes('userName')) {
        this.userData = JSON.parse(event.data);     
        this.welcomeMessage = this.userData.fullName;  
      }
    });
  }

  MyCoins = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
      title: 'Solana',
      quantity: '50 SOL',
      currencyValue: 'AED 836.00',
      change: '10.05',
      changeType: 'up',
    },
    {
      icon: 'https://ethereum.org/static/5022dfe8d23b106be4d3d2b021accd46/8cb4c/eth-diamond-black-gray.png',
      title: 'Ethereum',
      quantity: '2 ETH',
      currencyValue: 'AED 3827.00',
      change: '12.07',
      changeType: 'up',
    },
    {
      icon: 'https://logowik.com/content/uploads/images/polygon-matic-icon3725.logowik.com.webp',
      title: 'Polygon',
      quantity: '140 MATIC',
      currencyValue: 'AED 92.00',
      change: '2.87',
      changeType: 'up',
    },
  ];
}
