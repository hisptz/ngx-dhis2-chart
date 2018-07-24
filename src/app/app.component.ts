import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLayer: string;
  layers: any = {
    layer1: [
      {
        id: 'layer1',
        analytics: {
          headers: [
            {
              name: 'dx',
              column: 'Data',
              valueType: 'TEXT',
              type: 'java.lang.String',
              hidden: false,
              meta: true
            },
            {
              name: 'pe',
              column: 'Period',
              valueType: 'TEXT',
              type: 'java.lang.String',
              hidden: false,
              meta: true
            },
            {
              name: 'ou',
              column: 'Organisation unit',
              valueType: 'TEXT',
              type: 'java.lang.String',
              hidden: false,
              meta: true
            },
            {
              name: 'value',
              column: 'Value',
              valueType: 'NUMBER',
              type: 'java.lang.Double',
              hidden: false,
              meta: false
            }
          ],
          metaData: {
            items: {
              jUb8gELQApl: { name: 'Kailahun' },
              eIQbndfxQMb: { name: 'Tonkolili' },
              Vth0fbpFcsO: { name: 'Kono' },
              '201712': { name: 'December 2017' },
              '201711': { name: 'November 2017' },
              O6uvpzGd5pu: { name: 'Bo' },
              bL4ooGhyHRQ: { name: 'Pujehun' },
              kJq2mPyFEHo: { name: 'Kenema' },
              '201710': { name: 'October 2017' },
              at6UHUQatSo: { name: 'Western Area' },
              dx: { name: 'Data' },
              '201709': { name: 'September 2017' },
              '201708': { name: 'August 2017' },
              '201705': { name: 'May 2017' },
              '201804': { name: 'April 2018' },
              TEQlaapDQoK: { name: 'Port Loko' },
              '201803': { name: 'March 2018' },
              '201707': { name: 'July 2017' },
              PMa2VCrupOd: { name: 'Kambia' },
              ou: { name: 'Organisation unit' },
              '201706': { name: 'June 2017' },
              '201802': { name: 'February 2018' },
              '201801': { name: 'January 2018' },
              fdc6uOvgoji: { name: 'Bombali' },
              pe: { name: 'Period' },
              dwEq7wi6nXV: {
                name: 'ANC IPT 1 Coverage',
                legendSet: 'fqs276KXCXi'
              },
              lc3eMKXaEfw: { name: 'Bonthe' },
              qhqAxPSTUXp: { name: 'Koinadugu' },
              jmIPBj66vD6: { name: 'Moyamba' }
            },
            dimensions: {
              dx: ['dwEq7wi6nXV'],
              pe: [
                '201705',
                '201706',
                '201707',
                '201708',
                '201709',
                '201710',
                '201711',
                '201712',
                '201801',
                '201802',
                '201803',
                '201804'
              ],
              ou: [
                'O6uvpzGd5pu',
                'fdc6uOvgoji',
                'lc3eMKXaEfw',
                'jUb8gELQApl',
                'PMa2VCrupOd',
                'kJq2mPyFEHo',
                'qhqAxPSTUXp',
                'Vth0fbpFcsO',
                'jmIPBj66vD6',
                'TEQlaapDQoK',
                'bL4ooGhyHRQ',
                'eIQbndfxQMb',
                'at6UHUQatSo'
              ],
              co: []
            }
          },
          height: 148,
          width: 4,
          rows: [
            ['dwEq7wi6nXV', '201705', 'O6uvpzGd5pu', '90.1'],
            ['dwEq7wi6nXV', '201705', 'fdc6uOvgoji', '80.2'],
            ['dwEq7wi6nXV', '201705', 'lc3eMKXaEfw', '146.2'],
            ['dwEq7wi6nXV', '201705', 'jUb8gELQApl', '102.5'],
            ['dwEq7wi6nXV', '201705', 'PMa2VCrupOd', '93.5'],
            ['dwEq7wi6nXV', '201705', 'kJq2mPyFEHo', '137.4'],
            ['dwEq7wi6nXV', '201705', 'qhqAxPSTUXp', '120.0'],
            ['dwEq7wi6nXV', '201705', 'Vth0fbpFcsO', '162.1'],
            ['dwEq7wi6nXV', '201705', 'jmIPBj66vD6', '125.8'],
            ['dwEq7wi6nXV', '201705', 'TEQlaapDQoK', '146.2'],
            ['dwEq7wi6nXV', '201705', 'bL4ooGhyHRQ', '132.9'],
            ['dwEq7wi6nXV', '201705', 'eIQbndfxQMb', '125.7'],
            ['dwEq7wi6nXV', '201705', 'at6UHUQatSo', '159.8'],
            ['dwEq7wi6nXV', '201706', 'O6uvpzGd5pu', '99.3'],
            ['dwEq7wi6nXV', '201706', 'fdc6uOvgoji', '77.1'],
            ['dwEq7wi6nXV', '201706', 'lc3eMKXaEfw', '103.8'],
            ['dwEq7wi6nXV', '201706', 'jUb8gELQApl', '109.0'],
            ['dwEq7wi6nXV', '201706', 'PMa2VCrupOd', '80.0'],
            ['dwEq7wi6nXV', '201706', 'kJq2mPyFEHo', '139.2'],
            ['dwEq7wi6nXV', '201706', 'qhqAxPSTUXp', '122.1'],
            ['dwEq7wi6nXV', '201706', 'Vth0fbpFcsO', '61.8'],
            ['dwEq7wi6nXV', '201706', 'jmIPBj66vD6', '111.7'],
            ['dwEq7wi6nXV', '201706', 'TEQlaapDQoK', '172.1'],
            ['dwEq7wi6nXV', '201706', 'bL4ooGhyHRQ', '107.0'],
            ['dwEq7wi6nXV', '201706', 'eIQbndfxQMb', '113.6'],
            ['dwEq7wi6nXV', '201706', 'at6UHUQatSo', '91.6'],
            ['dwEq7wi6nXV', '201707', 'O6uvpzGd5pu', '99.9'],
            ['dwEq7wi6nXV', '201707', 'fdc6uOvgoji', '83.2'],
            ['dwEq7wi6nXV', '201707', 'lc3eMKXaEfw', '109.1'],
            ['dwEq7wi6nXV', '201707', 'jUb8gELQApl', '87.5'],
            ['dwEq7wi6nXV', '201707', 'PMa2VCrupOd', '76.6'],
            ['dwEq7wi6nXV', '201707', 'kJq2mPyFEHo', '91.6'],
            ['dwEq7wi6nXV', '201707', 'qhqAxPSTUXp', '98.1'],
            ['dwEq7wi6nXV', '201707', 'Vth0fbpFcsO', '73.5'],
            ['dwEq7wi6nXV', '201707', 'jmIPBj66vD6', '100.7'],
            ['dwEq7wi6nXV', '201707', 'TEQlaapDQoK', '149.9'],
            ['dwEq7wi6nXV', '201707', 'bL4ooGhyHRQ', '125.0'],
            ['dwEq7wi6nXV', '201707', 'eIQbndfxQMb', '99.8'],
            ['dwEq7wi6nXV', '201707', 'at6UHUQatSo', '232.5'],
            ['dwEq7wi6nXV', '201708', 'O6uvpzGd5pu', '72.9'],
            ['dwEq7wi6nXV', '201708', 'fdc6uOvgoji', '57.6'],
            ['dwEq7wi6nXV', '201708', 'lc3eMKXaEfw', '96.8'],
            ['dwEq7wi6nXV', '201708', 'jUb8gELQApl', '84.9'],
            ['dwEq7wi6nXV', '201708', 'PMa2VCrupOd', '72.6'],
            ['dwEq7wi6nXV', '201708', 'kJq2mPyFEHo', '114.3'],
            ['dwEq7wi6nXV', '201708', 'qhqAxPSTUXp', '107.6'],
            ['dwEq7wi6nXV', '201708', 'Vth0fbpFcsO', '45.3'],
            ['dwEq7wi6nXV', '201708', 'jmIPBj66vD6', '106.8'],
            ['dwEq7wi6nXV', '201708', 'TEQlaapDQoK', '159.9'],
            ['dwEq7wi6nXV', '201708', 'bL4ooGhyHRQ', '157.2'],
            ['dwEq7wi6nXV', '201708', 'eIQbndfxQMb', '88.6'],
            ['dwEq7wi6nXV', '201708', 'at6UHUQatSo', '124.3'],
            ['dwEq7wi6nXV', '201709', 'O6uvpzGd5pu', '98.5'],
            ['dwEq7wi6nXV', '201709', 'fdc6uOvgoji', '78.6'],
            ['dwEq7wi6nXV', '201709', 'lc3eMKXaEfw', '116.9'],
            ['dwEq7wi6nXV', '201709', 'jUb8gELQApl', '75.8'],
            ['dwEq7wi6nXV', '201709', 'PMa2VCrupOd', '86.4'],
            ['dwEq7wi6nXV', '201709', 'kJq2mPyFEHo', '75.3'],
            ['dwEq7wi6nXV', '201709', 'qhqAxPSTUXp', '131.9'],
            ['dwEq7wi6nXV', '201709', 'Vth0fbpFcsO', '160.4'],
            ['dwEq7wi6nXV', '201709', 'jmIPBj66vD6', '116.8'],
            ['dwEq7wi6nXV', '201709', 'TEQlaapDQoK', '178.8'],
            ['dwEq7wi6nXV', '201709', 'bL4ooGhyHRQ', '152.2'],
            ['dwEq7wi6nXV', '201709', 'eIQbndfxQMb', '102.2'],
            ['dwEq7wi6nXV', '201709', 'at6UHUQatSo', '110.3'],
            ['dwEq7wi6nXV', '201710', 'O6uvpzGd5pu', '128.7'],
            ['dwEq7wi6nXV', '201710', 'fdc6uOvgoji', '102.3'],
            ['dwEq7wi6nXV', '201710', 'jUb8gELQApl', '156.0'],
            ['dwEq7wi6nXV', '201710', 'PMa2VCrupOd', '119.7'],
            ['dwEq7wi6nXV', '201710', 'kJq2mPyFEHo', '99.6'],
            ['dwEq7wi6nXV', '201710', 'jmIPBj66vD6', '102.4'],
            ['dwEq7wi6nXV', '201710', 'TEQlaapDQoK', '162.2'],
            ['dwEq7wi6nXV', '201710', 'bL4ooGhyHRQ', '100.0'],
            ['dwEq7wi6nXV', '201710', 'eIQbndfxQMb', '137.3'],
            ['dwEq7wi6nXV', '201710', 'at6UHUQatSo', '106.7'],
            ['dwEq7wi6nXV', '201711', 'O6uvpzGd5pu', '109.1'],
            ['dwEq7wi6nXV', '201711', 'lc3eMKXaEfw', '125.5'],
            ['dwEq7wi6nXV', '201711', 'jUb8gELQApl', '118.2'],
            ['dwEq7wi6nXV', '201711', 'PMa2VCrupOd', '115.6'],
            ['dwEq7wi6nXV', '201711', 'kJq2mPyFEHo', '81.6'],
            ['dwEq7wi6nXV', '201711', 'qhqAxPSTUXp', '112.5'],
            ['dwEq7wi6nXV', '201711', 'jmIPBj66vD6', '106.3'],
            ['dwEq7wi6nXV', '201711', 'TEQlaapDQoK', '173.7'],
            ['dwEq7wi6nXV', '201711', 'bL4ooGhyHRQ', '225.0'],
            ['dwEq7wi6nXV', '201711', 'eIQbndfxQMb', '113.9'],
            ['dwEq7wi6nXV', '201711', 'at6UHUQatSo', '123.9'],
            ['dwEq7wi6nXV', '201712', 'O6uvpzGd5pu', '136.9'],
            ['dwEq7wi6nXV', '201712', 'fdc6uOvgoji', '95.2'],
            ['dwEq7wi6nXV', '201712', 'jUb8gELQApl', '117.6'],
            ['dwEq7wi6nXV', '201712', 'PMa2VCrupOd', '126.2'],
            ['dwEq7wi6nXV', '201712', 'kJq2mPyFEHo', '102.1'],
            ['dwEq7wi6nXV', '201712', 'Vth0fbpFcsO', '85.0'],
            ['dwEq7wi6nXV', '201712', 'jmIPBj66vD6', '104.4'],
            ['dwEq7wi6nXV', '201712', 'bL4ooGhyHRQ', '366.7'],
            ['dwEq7wi6nXV', '201712', 'eIQbndfxQMb', '132.8'],
            ['dwEq7wi6nXV', '201712', 'at6UHUQatSo', '127.9'],
            ['dwEq7wi6nXV', '201801', 'O6uvpzGd5pu', '114.9'],
            ['dwEq7wi6nXV', '201801', 'fdc6uOvgoji', '95.0'],
            ['dwEq7wi6nXV', '201801', 'lc3eMKXaEfw', '136.0'],
            ['dwEq7wi6nXV', '201801', 'jUb8gELQApl', '97.1'],
            ['dwEq7wi6nXV', '201801', 'PMa2VCrupOd', '78.7'],
            ['dwEq7wi6nXV', '201801', 'kJq2mPyFEHo', '115.1'],
            ['dwEq7wi6nXV', '201801', 'qhqAxPSTUXp', '136.2'],
            ['dwEq7wi6nXV', '201801', 'Vth0fbpFcsO', '81.6'],
            ['dwEq7wi6nXV', '201801', 'jmIPBj66vD6', '106.5'],
            ['dwEq7wi6nXV', '201801', 'TEQlaapDQoK', '155.3'],
            ['dwEq7wi6nXV', '201801', 'bL4ooGhyHRQ', '101.5'],
            ['dwEq7wi6nXV', '201801', 'eIQbndfxQMb', '128.1'],
            ['dwEq7wi6nXV', '201801', 'at6UHUQatSo', '96.0'],
            ['dwEq7wi6nXV', '201802', 'O6uvpzGd5pu', '84.8'],
            ['dwEq7wi6nXV', '201802', 'fdc6uOvgoji', '94.7'],
            ['dwEq7wi6nXV', '201802', 'lc3eMKXaEfw', '81.9'],
            ['dwEq7wi6nXV', '201802', 'jUb8gELQApl', '91.1'],
            ['dwEq7wi6nXV', '201802', 'PMa2VCrupOd', '93.5'],
            ['dwEq7wi6nXV', '201802', 'kJq2mPyFEHo', '140.5'],
            ['dwEq7wi6nXV', '201802', 'qhqAxPSTUXp', '139.3'],
            ['dwEq7wi6nXV', '201802', 'Vth0fbpFcsO', '106.3'],
            ['dwEq7wi6nXV', '201802', 'jmIPBj66vD6', '129.7'],
            ['dwEq7wi6nXV', '201802', 'TEQlaapDQoK', '158.9'],
            ['dwEq7wi6nXV', '201802', 'bL4ooGhyHRQ', '111.1'],
            ['dwEq7wi6nXV', '201802', 'eIQbndfxQMb', '111.2'],
            ['dwEq7wi6nXV', '201802', 'at6UHUQatSo', '117.2'],
            ['dwEq7wi6nXV', '201803', 'O6uvpzGd5pu', '99.8'],
            ['dwEq7wi6nXV', '201803', 'fdc6uOvgoji', '85.7'],
            ['dwEq7wi6nXV', '201803', 'lc3eMKXaEfw', '105.4'],
            ['dwEq7wi6nXV', '201803', 'jUb8gELQApl', '91.6'],
            ['dwEq7wi6nXV', '201803', 'PMa2VCrupOd', '71.6'],
            ['dwEq7wi6nXV', '201803', 'kJq2mPyFEHo', '135.8'],
            ['dwEq7wi6nXV', '201803', 'qhqAxPSTUXp', '104.8'],
            ['dwEq7wi6nXV', '201803', 'Vth0fbpFcsO', '87.8'],
            ['dwEq7wi6nXV', '201803', 'jmIPBj66vD6', '131.4'],
            ['dwEq7wi6nXV', '201803', 'TEQlaapDQoK', '131.9'],
            ['dwEq7wi6nXV', '201803', 'bL4ooGhyHRQ', '95.4'],
            ['dwEq7wi6nXV', '201803', 'eIQbndfxQMb', '133.8'],
            ['dwEq7wi6nXV', '201803', 'at6UHUQatSo', '119.6'],
            ['dwEq7wi6nXV', '201804', 'O6uvpzGd5pu', '84.8'],
            ['dwEq7wi6nXV', '201804', 'fdc6uOvgoji', '78.9'],
            ['dwEq7wi6nXV', '201804', 'lc3eMKXaEfw', '111.0'],
            ['dwEq7wi6nXV', '201804', 'jUb8gELQApl', '100.3'],
            ['dwEq7wi6nXV', '201804', 'PMa2VCrupOd', '79.8'],
            ['dwEq7wi6nXV', '201804', 'kJq2mPyFEHo', '115.3'],
            ['dwEq7wi6nXV', '201804', 'qhqAxPSTUXp', '137.6'],
            ['dwEq7wi6nXV', '201804', 'Vth0fbpFcsO', '88.8'],
            ['dwEq7wi6nXV', '201804', 'jmIPBj66vD6', '115.2'],
            ['dwEq7wi6nXV', '201804', 'TEQlaapDQoK', '136.9'],
            ['dwEq7wi6nXV', '201804', 'bL4ooGhyHRQ', '101.1'],
            ['dwEq7wi6nXV', '201804', 'eIQbndfxQMb', '116.8'],
            ['dwEq7wi6nXV', '201804', 'at6UHUQatSo', '115.0']
          ]
        },
        layout: {
          rows: ['ou'],
          columns: ['dx']
        }
      }
    ],
    layer2: [
      {
        id: 'layer2',
        analytics: {
          headers: [
            {
              name: 'ou',
              column: 'Organisation unit',
              valueType: 'TEXT',
              type: 'java.lang.String',
              hidden: false,
              meta: true
            },
            {
              name: 'pe',
              column: 'Period',
              valueType: 'TEXT',
              type: 'java.lang.String',
              hidden: false,
              meta: true
            },
            {
              name: 'value',
              column: 'Value',
              valueType: 'NUMBER',
              type: 'java.lang.Double',
              hidden: false,
              meta: false
            },
            {
              name: 'numerator',
              column: 'Numerator',
              valueType: 'NUMBER',
              type: 'java.lang.Double',
              hidden: false,
              meta: false
            },
            {
              name: 'denominator',
              column: 'Denominator',
              valueType: 'NUMBER',
              type: 'java.lang.Double',
              hidden: false,
              meta: false
            },
            {
              name: 'factor',
              column: 'Factor',
              valueType: 'NUMBER',
              type: 'java.lang.Double',
              hidden: false,
              meta: false
            }
          ],
          metaData: {
            items: {
              201707: {
                name: 'July 2017'
              },
              201708: {
                name: 'August 2017'
              },
              201709: {
                name: 'September 2017'
              },
              201710: {
                name: 'October 2017'
              },
              201711: {
                name: 'November 2017'
              },
              201712: {
                name: 'December 2017'
              },
              201801: {
                name: 'January 2018'
              },
              201802: {
                name: 'February 2018'
              },
              201803: {
                name: 'March 2018'
              },
              201804: {
                name: 'April 2018'
              },
              201805: {
                name: 'May 2018'
              },
              201806: {
                name: 'June 2018'
              },
              jUb8gELQApl: {
                name: 'Kailahun'
              },
              eIQbndfxQMb: {
                name: 'Tonkolili'
              },
              Vth0fbpFcsO: {
                name: 'Kono'
              },
              O6uvpzGd5pu: {
                name: 'Bo'
              },
              bL4ooGhyHRQ: {
                name: 'Pujehun'
              },
              kJq2mPyFEHo: {
                name: 'Kenema'
              },
              at6UHUQatSo: {
                name: 'Western Area'
              },
              dx: {
                name: 'Data'
              },
              TEQlaapDQoK: {
                name: 'Port Loko'
              },
              PMa2VCrupOd: {
                name: 'Kambia'
              },
              ou: {
                name: 'Organisation unit'
              },
              fdc6uOvgoji: {
                name: 'Bombali'
              },
              pe: {
                name: 'Period'
              },
              dwEq7wi6nXV: {
                name: 'ANC IPT 1 Coverage',
                legendSet: 'fqs276KXCXi'
              },
              lc3eMKXaEfw: {
                name: 'Bonthe'
              },
              qhqAxPSTUXp: {
                name: 'Koinadugu'
              },
              jmIPBj66vD6: {
                name: 'Moyamba'
              }
            },
            dimensions: {
              dx: ['dwEq7wi6nXV'],
              pe: [
                '201707',
                '201708',
                '201709',
                '201710',
                '201711',
                '201712',
                '201801',
                '201802',
                '201803',
                '201804',
                '201805',
                '201806'
              ],
              ou: [
                'O6uvpzGd5pu',
                'fdc6uOvgoji',
                'lc3eMKXaEfw',
                'jUb8gELQApl',
                'PMa2VCrupOd',
                'kJq2mPyFEHo',
                'qhqAxPSTUXp',
                'Vth0fbpFcsO',
                'jmIPBj66vD6',
                'TEQlaapDQoK',
                'bL4ooGhyHRQ',
                'eIQbndfxQMb',
                'at6UHUQatSo'
              ],
              co: []
            }
          },
          width: 6,
          height: 148,
          rows: [
            ['O6uvpzGd5pu', '201707', '99.9', '3128.0', '3132.0', '100.0'],
            ['O6uvpzGd5pu', '201708', '72.9', '2097.0', '2875.0', '100.0'],
            ['O6uvpzGd5pu', '201709', '98.5', '3166.0', '3213.0', '100.0'],
            ['O6uvpzGd5pu', '201710', '128.7', '3639.0', '2827.0', '100.0'],
            ['O6uvpzGd5pu', '201711', '109.1', '3989.0', '3656.0', '100.0'],
            ['O6uvpzGd5pu', '201712', '136.9', '2967.0', '2167.0', '100.0'],
            ['O6uvpzGd5pu', '201801', '114.9', '2911.0', '2533.0', '100.0'],
            ['O6uvpzGd5pu', '201802', '84.8', '2104.0', '2481.0', '100.0'],
            ['O6uvpzGd5pu', '201803', '99.8', '2476.0', '2482.0', '100.0'],
            ['O6uvpzGd5pu', '201804', '84.8', '2184.0', '2575.0', '100.0'],
            ['O6uvpzGd5pu', '201805', '90.1', '2773.0', '3076.0', '100.0'],
            ['O6uvpzGd5pu', '201806', '99.3', '2730.0', '2748.0', '100.0'],
            ['fdc6uOvgoji', '201707', '83.2', '1331.0', '1599.0', '100.0'],
            ['fdc6uOvgoji', '201708', '57.6', '936.0', '1624.0', '100.0'],
            ['fdc6uOvgoji', '201709', '78.6', '1040.0', '1323.0', '100.0'],
            ['fdc6uOvgoji', '201710', '102.3', '1411.0', '1379.0', '100.0'],
            ['fdc6uOvgoji', '201712', '95.2', '1343.0', '1410.0', '100.0'],
            ['fdc6uOvgoji', '201801', '95.0', '1447.0', '1523.0', '100.0'],
            ['fdc6uOvgoji', '201802', '94.7', '1314.0', '1387.0', '100.0'],
            ['fdc6uOvgoji', '201803', '85.7', '1183.0', '1380.0', '100.0'],
            ['fdc6uOvgoji', '201804', '78.9', '1236.0', '1566.0', '100.0'],
            ['fdc6uOvgoji', '201805', '80.2', '1701.0', '2122.0', '100.0'],
            ['fdc6uOvgoji', '201806', '77.1', '1324.0', '1718.0', '100.0'],
            ['lc3eMKXaEfw', '201707', '109.1', '817.0', '749.0', '100.0'],
            ['lc3eMKXaEfw', '201708', '96.8', '686.0', '709.0', '100.0'],
            ['lc3eMKXaEfw', '201709', '116.9', '832.0', '712.0', '100.0'],
            ['lc3eMKXaEfw', '201711', '125.5', '826.0', '658.0', '100.0'],
            ['lc3eMKXaEfw', '201801', '136.0', '839.0', '617.0', '100.0'],
            ['lc3eMKXaEfw', '201802', '81.9', '443.0', '541.0', '100.0'],
            ['lc3eMKXaEfw', '201803', '105.4', '551.0', '523.0', '100.0'],
            ['lc3eMKXaEfw', '201804', '111.0', '593.0', '534.0', '100.0'],
            ['lc3eMKXaEfw', '201805', '146.2', '1263.0', '864.0', '100.0'],
            ['lc3eMKXaEfw', '201806', '103.8', '826.0', '796.0', '100.0'],
            ['jUb8gELQApl', '201707', '87.5', '1190.0', '1360.0', '100.0'],
            ['jUb8gELQApl', '201708', '84.9', '1131.0', '1332.0', '100.0'],
            ['jUb8gELQApl', '201709', '75.8', '903.0', '1192.0', '100.0'],
            ['jUb8gELQApl', '201710', '156.0', '1764.0', '1131.0', '100.0'],
            ['jUb8gELQApl', '201711', '118.2', '1497.0', '1266.0', '100.0'],
            ['jUb8gELQApl', '201712', '117.6', '1355.0', '1152.0', '100.0'],
            ['jUb8gELQApl', '201801', '97.1', '1184.0', '1219.0', '100.0'],
            ['jUb8gELQApl', '201802', '91.1', '1044.0', '1146.0', '100.0'],
            ['jUb8gELQApl', '201803', '91.6', '1115.0', '1217.0', '100.0'],
            ['jUb8gELQApl', '201804', '100.3', '1268.0', '1264.0', '100.0'],
            ['jUb8gELQApl', '201805', '102.5', '1539.0', '1501.0', '100.0'],
            ['jUb8gELQApl', '201806', '109.0', '1488.0', '1365.0', '100.0'],
            ['PMa2VCrupOd', '201707', '76.6', '897.0', '1171.0', '100.0'],
            ['PMa2VCrupOd', '201708', '72.6', '762.0', '1050.0', '100.0'],
            ['PMa2VCrupOd', '201709', '86.4', '985.0', '1140.0', '100.0'],
            ['PMa2VCrupOd', '201710', '119.7', '1607.0', '1342.0', '100.0'],
            ['PMa2VCrupOd', '201711', '115.6', '1303.0', '1127.0', '100.0'],
            ['PMa2VCrupOd', '201712', '126.2', '1634.0', '1295.0', '100.0'],
            ['PMa2VCrupOd', '201801', '78.7', '1069.0', '1359.0', '100.0'],
            ['PMa2VCrupOd', '201802', '93.5', '871.0', '932.0', '100.0'],
            ['PMa2VCrupOd', '201803', '71.6', '769.0', '1074.0', '100.0'],
            ['PMa2VCrupOd', '201804', '79.8', '816.0', '1023.0', '100.0'],
            ['PMa2VCrupOd', '201805', '93.5', '1384.0', '1481.0', '100.0'],
            ['PMa2VCrupOd', '201806', '80.0', '1061.0', '1326.0', '100.0'],
            ['kJq2mPyFEHo', '201707', '91.6', '1699.0', '1854.0', '100.0'],
            ['kJq2mPyFEHo', '201708', '114.3', '2109.0', '1845.0', '100.0'],
            ['kJq2mPyFEHo', '201709', '75.3', '1531.0', '2034.0', '100.0'],
            ['kJq2mPyFEHo', '201710', '99.6', '2028.0', '2036.0', '100.0'],
            ['kJq2mPyFEHo', '201711', '81.6', '1639.0', '2009.0', '100.0'],
            ['kJq2mPyFEHo', '201712', '102.1', '1950.0', '1909.0', '100.0'],
            ['kJq2mPyFEHo', '201801', '115.1', '2252.0', '1956.0', '100.0'],
            ['kJq2mPyFEHo', '201802', '140.5', '2491.0', '1773.0', '100.0'],
            ['kJq2mPyFEHo', '201803', '135.8', '2414.0', '1778.0', '100.0'],
            ['kJq2mPyFEHo', '201804', '115.3', '2392.0', '2074.0', '100.0'],
            ['kJq2mPyFEHo', '201805', '137.4', '4140.0', '3013.0', '100.0'],
            ['kJq2mPyFEHo', '201806', '139.2', '2876.0', '2066.0', '100.0'],
            ['qhqAxPSTUXp', '201707', '98.1', '732.0', '746.0', '100.0'],
            ['qhqAxPSTUXp', '201708', '107.6', '1080.0', '1004.0', '100.0'],
            ['qhqAxPSTUXp', '201709', '131.9', '1424.0', '1080.0', '100.0'],
            ['qhqAxPSTUXp', '201711', '112.5', '1422.0', '1264.0', '100.0'],
            ['qhqAxPSTUXp', '201801', '136.2', '1143.0', '839.0', '100.0'],
            ['qhqAxPSTUXp', '201802', '139.3', '1105.0', '793.0', '100.0'],
            ['qhqAxPSTUXp', '201803', '104.8', '881.0', '841.0', '100.0'],
            ['qhqAxPSTUXp', '201804', '137.6', '1128.0', '820.0', '100.0'],
            ['qhqAxPSTUXp', '201805', '120.0', '1250.0', '1042.0', '100.0'],
            ['qhqAxPSTUXp', '201806', '122.1', '800.0', '655.0', '100.0'],
            ['Vth0fbpFcsO', '201707', '73.5', '636.0', '865.0', '100.0'],
            ['Vth0fbpFcsO', '201708', '45.3', '338.0', '746.0', '100.0'],
            ['Vth0fbpFcsO', '201709', '160.4', '1405.0', '876.0', '100.0'],
            ['Vth0fbpFcsO', '201712', '85.0', '979.0', '1152.0', '100.0'],
            ['Vth0fbpFcsO', '201801', '81.6', '605.0', '741.0', '100.0'],
            ['Vth0fbpFcsO', '201802', '106.3', '1275.0', '1199.0', '100.0'],
            ['Vth0fbpFcsO', '201803', '87.8', '861.0', '981.0', '100.0'],
            ['Vth0fbpFcsO', '201804', '88.8', '855.0', '963.0', '100.0'],
            ['Vth0fbpFcsO', '201805', '162.1', '1326.0', '818.0', '100.0'],
            ['Vth0fbpFcsO', '201806', '61.8', '564.0', '913.0', '100.0'],
            ['jmIPBj66vD6', '201707', '100.7', '1499.0', '1489.0', '100.0'],
            ['jmIPBj66vD6', '201708', '106.8', '1311.0', '1228.0', '100.0'],
            ['jmIPBj66vD6', '201709', '116.8', '1678.0', '1437.0', '100.0'],
            ['jmIPBj66vD6', '201710', '102.4', '1299.0', '1269.0', '100.0'],
            ['jmIPBj66vD6', '201711', '106.3', '1324.0', '1245.0', '100.0'],
            ['jmIPBj66vD6', '201712', '104.4', '1179.0', '1129.0', '100.0'],
            ['jmIPBj66vD6', '201801', '106.5', '1534.0', '1440.0', '100.0'],
            ['jmIPBj66vD6', '201802', '129.7', '1841.0', '1419.0', '100.0'],
            ['jmIPBj66vD6', '201803', '131.4', '1533.0', '1167.0', '100.0'],
            ['jmIPBj66vD6', '201804', '115.2', '1668.0', '1448.0', '100.0'],
            ['jmIPBj66vD6', '201805', '125.8', '1897.0', '1508.0', '100.0'],
            ['jmIPBj66vD6', '201806', '111.7', '1552.0', '1390.0', '100.0'],
            ['TEQlaapDQoK', '201707', '149.9', '3518.0', '2347.0', '100.0'],
            ['TEQlaapDQoK', '201708', '159.9', '3575.0', '2236.0', '100.0'],
            ['TEQlaapDQoK', '201709', '178.8', '3636.0', '2033.0', '100.0'],
            ['TEQlaapDQoK', '201710', '162.2', '2896.0', '1785.0', '100.0'],
            ['TEQlaapDQoK', '201711', '173.7', '3479.0', '2003.0', '100.0'],
            ['TEQlaapDQoK', '201801', '155.3', '3130.0', '2016.0', '100.0'],
            ['TEQlaapDQoK', '201802', '158.9', '2818.0', '1774.0', '100.0'],
            ['TEQlaapDQoK', '201803', '131.9', '2217.0', '1681.0', '100.0'],
            ['TEQlaapDQoK', '201804', '136.9', '2532.0', '1850.0', '100.0'],
            ['TEQlaapDQoK', '201805', '146.2', '4891.0', '3345.0', '100.0'],
            ['TEQlaapDQoK', '201806', '172.1', '4651.0', '2703.0', '100.0'],
            ['bL4ooGhyHRQ', '201707', '125.0', '1579.0', '1263.0', '100.0'],
            ['bL4ooGhyHRQ', '201708', '157.2', '1674.0', '1065.0', '100.0'],
            ['bL4ooGhyHRQ', '201709', '152.2', '1577.0', '1036.0', '100.0'],
            ['bL4ooGhyHRQ', '201710', '100.0', '7.0', '7.0', '100.0'],
            ['bL4ooGhyHRQ', '201711', '225.0', '18.0', '8.0', '100.0'],
            ['bL4ooGhyHRQ', '201712', '366.7', '22.0', '6.0', '100.0'],
            ['bL4ooGhyHRQ', '201801', '101.5', '1263.0', '1244.0', '100.0'],
            ['bL4ooGhyHRQ', '201802', '111.1', '1123.0', '1011.0', '100.0'],
            ['bL4ooGhyHRQ', '201803', '95.4', '959.0', '1005.0', '100.0'],
            ['bL4ooGhyHRQ', '201804', '101.1', '1320.0', '1306.0', '100.0'],
            ['bL4ooGhyHRQ', '201805', '132.9', '1811.0', '1363.0', '100.0'],
            ['bL4ooGhyHRQ', '201806', '107.0', '1443.0', '1348.0', '100.0'],
            ['eIQbndfxQMb', '201707', '99.8', '1706.0', '1709.0', '100.0'],
            ['eIQbndfxQMb', '201708', '88.6', '1844.0', '2082.0', '100.0'],
            ['eIQbndfxQMb', '201709', '102.2', '2276.0', '2228.0', '100.0'],
            ['eIQbndfxQMb', '201710', '137.3', '2988.0', '2176.0', '100.0'],
            ['eIQbndfxQMb', '201711', '113.9', '2466.0', '2165.0', '100.0'],
            ['eIQbndfxQMb', '201712', '132.8', '2504.0', '1885.0', '100.0'],
            ['eIQbndfxQMb', '201801', '128.1', '1755.0', '1370.0', '100.0'],
            ['eIQbndfxQMb', '201802', '111.2', '1603.0', '1441.0', '100.0'],
            ['eIQbndfxQMb', '201803', '133.8', '1885.0', '1409.0', '100.0'],
            ['eIQbndfxQMb', '201804', '116.8', '1711.0', '1465.0', '100.0'],
            ['eIQbndfxQMb', '201805', '125.7', '3133.0', '2492.0', '100.0'],
            ['eIQbndfxQMb', '201806', '113.6', '2366.0', '2083.0', '100.0'],
            ['at6UHUQatSo', '201707', '232.5', '9469.0', '4072.0', '100.0'],
            ['at6UHUQatSo', '201708', '124.3', '5232.0', '4208.0', '100.0'],
            ['at6UHUQatSo', '201709', '110.3', '4416.0', '4004.0', '100.0'],
            ['at6UHUQatSo', '201710', '106.7', '4242.0', '3974.0', '100.0'],
            ['at6UHUQatSo', '201711', '123.9', '5317.0', '4290.0', '100.0'],
            ['at6UHUQatSo', '201712', '127.9', '4961.0', '3878.0', '100.0'],
            ['at6UHUQatSo', '201801', '96.0', '3036.0', '3163.0', '100.0'],
            ['at6UHUQatSo', '201802', '117.2', '3474.0', '2965.0', '100.0'],
            ['at6UHUQatSo', '201803', '119.6', '3632.0', '3038.0', '100.0'],
            ['at6UHUQatSo', '201804', '115.0', '5738.0', '4989.0', '100.0'],
            ['at6UHUQatSo', '201805', '159.8', '10924.0', '6836.0', '100.0'],
            ['at6UHUQatSo', '201806', '91.6', '4307.0', '4702.0', '100.0']
          ]
        },
        layout: {
          rows: ['ou'],
          columns: ['dx']
        }
      }
    ]
  };
  private _visualizationLayers$: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >(this.layers[this.currentLayer]);
  visualizationLayers$: Observable<any[]>;

  constructor() {
    this.currentLayer = 'layer1';
    this.visualizationLayers$ = this._visualizationLayers$.asObservable();
  }

  onVisualizationChange(e) {
    e.stopPropagation();
    this._visualizationLayers$.next([...this.layers[this.currentLayer]]);
  }
}
