import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  MyCoins = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
      title: 'Solana',
      quantity: '50 SOL',
      currencyValue: 'AED 836',
      change: '10.05',
      changeType: 'up',
    },
    {
      icon: 'https://ethereum.org/static/5022dfe8d23b106be4d3d2b021accd46/8cb4c/eth-diamond-black-gray.png',
      title: 'Ethereum',
      quantity: '2 ETH',
      currencyValue: 'AED 3827',
      change: '12.07',
      changeType: 'up',
    },
    {
      icon: 'https://altcoinsbox.com/wp-content/uploads/2023/03/matic-logo.png',
      title: 'Polygon',
      quantity: '140 MATIC',
      currencyValue: 'AED 92',
      change: '2.87',
      changeType: 'up',
    },
  ];
}
