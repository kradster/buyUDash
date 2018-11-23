@main.route('/price-bitcoin-india', methods=['GET'])
def landing_price_btc():
    outputs = dict()
    outputs['curr'] = 'btc'
    outputs['currency'] = 'Bitcoin'
    outputs['what_is'] = "Bitcoin is not physical note or physical coin, But it is actually digital cash. It is fully decentralized- so there is no expert or administration runs over Bitcoin. Bitcoin is interchangeable on the web between two people without involvement of any third party. It can be shared without any geographic points of confinement."
    outputs['price_in_sept17'] ="On 1st September, 2017, The bitcoin price in rupees reached at INR 2,90,829. But the high range of news about the clamp down/ shut down of cryptocurrency exchanges in China affected the bitcoin price in INR and the bitcoin price in India dropped down. At the end of September 2017, BTC to INR was 2,80,628"
    outputs['price_in_oct17']  ="Bitcoin entered into month October, 2017 with BTC to INR 2,83,894. Market trends kept going on. Bitcoin enthusiast kept exchanging/ buying/selling bitcoin. Till October 2017, the Bitcoin Gold was launched globally but it was not that much accepted by the people. Following the ups and down in the market. On 31st October, 2017, The price of BTC to INR was 6,71,327. It was huge bounce back in the price in crypto market."
    outputs['price_in_nov17']  ="The price of Bitcoin surged down over night and it entered into the November 2017 with BTC to INR 4,55,433 and because there was a commotion on the split of the Bitcoin network so, bitcoin relentlessly scaled up to reach 6,71,327 INR on 30th November 2017."
    outputs['price_in_dec17']  ="On 1st December, 2017 Bitcoin backslides from INR 7,09,339 due to disengagement of Bitcoin Cash from Coin base and on 31st December, 2017 BTC to INR dove up towards INR 9,47,519"
    outputs['price_in_jan18']  ="On 1st January, 2018, Bitcoin backslides from INR 900,299.60 and it’s price cut down and on 31st January, 2018, BTC to INR was INR 637,142.41"
    outputs['price_in_feb18']  ="The price of BTC rose over-night and bitcoin entered in Feb, 2018 with BTC to INR 644,042.50 and its price kept rising and on 28 February, 2018, the price of bitcoin in India reached up to INR 688,759.27"
    outputs['price_in_nov18']  ="Bitcoin price in India on 1st November 2018 was INR 469030. But due to low market the maximum price predicted at the end of the month is BTC to INR 488911 and minimum price which is predicted is INR 424941. It is predicted that there will be downfall of btc rate is -2.6% till the end of November 2018" 
    outputs['price_in_dec18']  ="It is predicted that in the beginning of December, BTC to INR will be INR 456926. And it will reach at maximum price of BTC to INR 479037. While minimum price will be INR 416359 and the price will be dropped with bitcoin rate -2.0%." 
    outputs['about'] = "Bitcoin is the very first and the most popular decentralized cryptocurrency in the world. It came into existence in 2009. The domain name for bitcoin was registered as Bitcoin.org on 18th Aug, 2008. It was founded by Satoshi Nakamoto. In 2009 Bitcoin was released as open source software. It is very first digital currency and innovative digital payment system that can be used by anyone without any kind of restriction. Bitcoin can be used for goods and services as well as it can be exchanged for other currencies. It is the most inexpensive and safe way for making transaction in short period of time. Because of it’s decentralized and peer to peer nature, the transactions take place directly between users without any central authority. All the transaction’s detail is stored in blockchain after being verified by the users in the network."
    outputs['features'] = ["Control against fraud:- Bitcoin network provides the users’ top level protection and security against the most common frauds like unwanted transactions charges and charge back. The users have complete control over their money because of encrypted wallet. So there is no chance of any type of Fraud.",
                            "Global accessible:- Bitcoin is globally accessible so it allows anyone i.e Banks, individuals, Business to make secure transactions anywhere at any time in few minutes.",
                            "Cost efficient:- The transactions made using bitcoin take less time and less cost is used as compare to other payment system",
                            "Decentralization:- Bitcoin is decentralized as there is no organization, no express, no life form controls it. Like email or the web, it can be utilized by anybody. since no organization controls it. The best way to alter the Bitcoin convention is to build up an agreement between the networks of its clients, which will just acknowledge adjustments enhancing the convention. Since the framework is decentralized, it is difficult to assault any point to crush it. The database containing the total of all Bitcoin exchanges exists in a huge number of duplicates circulated all through the world."
                            "Open Source:- Anybody can check Bitcoin's source code for blunders or provisos. In this, the convention is all things considered secure by the whole network. In the event that issues are discovered, they are dealt with rapidly and effectively, and not snuck by the cover. Any software engineer can likewise propose changes or advancements of the convention. They are then talked about openly, and conceivably acknowledged by accord.",
                            "Quick, efficient and without fringes:- Payments are done right away, between neighbors or from one end to the next of the associated world.",
                            "Secure and straightforward:- As soon as sent, your installment is unfalsifiable. All Bitcoin exchanges are recorded in an open database, the Blockchain, whose information and code are accessible to everybody."
                           ]
    return render_template('main/landing_price.html', outputs=outputs)


@main.route('/price-neo-india', methods=['GET'])
def landing_price_dcn():
    outputs = dict()
    outputs['curr'] = 'neo'
    outputs['currency'] = 'Neo'
    outputs['what_is'] = '''Cryptocurrencies are drawing in an ever increasing number of speculators, despite the fact that the part isn't yet directed. As far as digital forms of money, the decision is wide. The best known is likely bitcoin, however there are others including the NEO. With respect to cost of the NEO, it is developing and is as of now encountering a genuinely considerable increment against the dollar and Bitcoin. 
                            NEO Coin which is also known as AntShares is gaining popularity and more and more people are buying it because of it’s unexpected and impressive performance ,It grabbed and maintained it’s position among top 10 cryptocurrencies according to maket cap.It is the most promising cryptocurrency.
                         '''
    
    
    outputs['price_in_sept17'] ="On 31st August, 2017, NEO Price in Rupees reached at 2,116 but after that the price started declining and in September 2017, after so many fluctuation in NEO price in INR, the price stabilized and closed the month September 2017 with NEO to INR 2,218"
    outputs['price_in_oct17']  ="After closing the month September, 2017 with NEO to INR 2,218, The NEO price kept fluctuating and finally closed the month October with reduced price and the NEO price in India reached at INR 2,090"
    outputs['price_in_nov17']  ="On 1st November the NEO price in INR was 2,090 and it kept following the downward trend and closed the month November 2017 with NEO to INR 1830"
    outputs['price_in_dec17']  ="NEO entered into the last month of year 2017 with NEO to INR 2,033. Since the center of the week, most crypto have experienced a slight market redress. Nothing brutal except for a few speculators sadly sold down what they had purchased up. But there was hike in the neo price in India and on 25th Dec,2017 it reached at INR 4,320. It was an unexpected jump in the price"
    outputs['price_in_jan18']  ="NEO kept shining all the time and on 1st January, 2018 the neo price in rupees was 5296.98 and it kept moving along with market trend and finally at the end of January 2018 the Neo price in India reached at INR 9039.26"
    outputs['price_in_feb18']  ="On 1st February , 2018 the NEO price in INR was 9137.01 as it was shining like star since December 2017 but in Feb, 2018 due to the negative effect of clamp down by RBI there was decline in the price of NEO and at the end of February 2018, It reached at NEO to INR 8765.68"
    outputs['price_in_nov18']  ="In the beginning of November 2018, The NEO price in India was INR 975 and it is predicted that the maximum price of NEO in Inr will be 1107 and minimum price will be INR 715 and it is also forecasted that in November the NEO rate change will be -13.3%." 
    outputs['price_in_dec18']  ="It is predicted that on 1st December 2018, the NEO price in rupees will be 845 and the maximum NEO to INR will be 910 and minimum will be INR 715 and the change in NEO rate for December will be -7.7%"

    outputs['about'] = "NEO is also called “Chinese Ethereum” or “Ethereum’s killer“ NEO is the first decentralized, open-source cryptocurrency and block chain platform launched in China. NEO has one more crypto-token called GAS (formerly known as ANC-Antcoins). It supports most advanced programming languages like C#, Java and Python. The NEO token is the investment token of the NEO blockchain. It’s hard cap is 100 million tokens which is used in block creation, network management, network changes. One unique thing is that NEO is unlike other cryptocurrencies, it is non- divisible.Neo was launched by the team of Co-Founder Da Hongfei, Core developer – Zhang Zhengwen and Secretary General – Tao Rongqi and other community developers, operators and contributors." 

    outputs['features'] = ["Digital Assets- NEO aims to convert traditional assets into digital ones using smart contracts. These digital assets will be decentralized and be protected by law using digital certificates on the blockchain.",
                           "PRIVATE:-- It is impossible for any observers to determine the sender or the recipient of transactions.",
                           "SAFE:-- CloakCoins are never transferred to an intermediate party during Cloaking, So its safe and secure at all times.",
                           "Technology:-- ENIGMA off-chain mix to facilitate fully private, secure, untraceable and decentralized transactions."
                        ]    
    return render_template('main/landing_price.html', outputs=outputs)

@main.route('/price-ripple-india', methods=['GET'])
def landing_price_xrp():
    outputs = dict()
    outputs['curr'] = 'xrp'
    outputs['currency'] = 'Ripple'
    outputs['what_is'] = "Cryptocurrencies are drawing in an ever increasing number of speculators, despite the fact that the area isn't yet managed. Regarding digital forms of money, the decision is wide. The best known is presumably bitcoin, yet there are others including the Ripple. Access to this market is exceptionally basic and there is no requirement for huge funding to put resources into these cryptographic forms of money. The examination obviously advancement is by and by fundamental. As to cost of the Ripple, it is advancing and is right now encountering a genuinely significant increment against the dollar and Bitcoin."
    
    outputs['price_in_sept17'] ="In august 2017, Subsequent to achieving the edge, the ripple price reached at INR 10.80,but after that there was a decline in the cost of the Ripple. Moreover, it climbed and balanced out at XRP to INR 11.11. The advancement of the cost of the Ripple goes the correct way. Amid the ascent, the backward pattern halted and the XRP price in India was INR 11.43 at the end of September 2017."
    outputs['price_in_oct17']  ="In the wake of achieving, the ripple price in rupee reached at INR 11.43 in October 2017. Ripple vacillated to showcase patterns lastly achieved XRP to INR 37.78. This sudden flood in XRP in October 2017 was because of a progression of good coordinated efforts for the Ripple managing an account framework, the enthusiasm of speculators for altcoins and obviously the decay of bitcoin on the business sectors as of late."
    outputs['price_in_nov17']  ="In November Ripple entered with XRP to INR 36.83 and the Ripple price in India started fluctuating and finally reached at XRP to INR 48.49 . In end of November, the company behind Ripple(Ripple Labs) announced that Standard Chartered and Axis Bank were launching a new payment platform based on their technology. In November 2017, American Express had reported using Ripple's network to connect Santander's customers in Europe and the United States."
    outputs['price_in_dec17']  ="Since the middle of the week, most crypto-currencies have undergone a slight market correction. Nothing violent but some investors unfortunately sold down what they had bought up. Ripple had started with XRP to INR 13.86 and finally the ripple price in rupees reached at 113.4."
    outputs['price_in_jan18']  ="In January 2018 ripple price in INR was 155.83 and then there was decline in the price and finally it reached XRP to INR 72.55 on 31 January 2018."
    outputs['price_in_feb18']  ="On the 1st February 201, The XRP price in India was INR 61.22 and at the end of February it reached at XRP to INR 60.01"
    outputs['price_in_nov18']  ="On the 1st November 2018 the Ripple price in INR was 33.45 Rupees. It is predicted that the maximum ripple price in rupees will be 42.00 and while the minimum price will be INR 27.50 and the XRP rate change for November will be -11.6%." 
    outputs['price_in_dec18']  ="It is predicted that on 1st December XRP to INR will be INR 29.57 and the maximum price of ripple in india will be INR 29.57 and while the minimum XRP to INR will be 23.92. The XRP rate change for December will be -13.0%."

    outputs['about'] = '''In the world of cryptocurrency. there are so many players like Bitcoin, Ethereum, Litecoin ,Ethereum Classic etc. Ripple is one of the best player that grabbed too much attentions in market being the best friend of Banks. Because of being backed by so many banks and other financial institutes for giving them the best and fastest platform for fast and cheap transactions. Even being the competitor of major popular coins like Bitcoin, Ethereum it gained success after a major period of struggle. Because of it’s exposure all over the world we saw Ripple in news as hottest topic after the bitcoin. Ripple has struggled a lot to reach at top 10 cryptocurrencies in the world. 
                            XRP isn't the fundamental motivation behind Ripple. Outside monetary standards are at the focal point of the convention. Swell is a worldwide settlement organize.
                            Since Ripple is fundamentally an installment organize, XRP will be utilized to make the system as sound as would be prudent, which will probably include liquidity administration with XRP. 
                            Ripple innovation is embraced by organizations, for example, UniCredit, UBS or Santander and installment arranges as a settlement framework. The Ripple convention consequently incorporates the banks existing systems and permits free trade and exchange of assets. 
                        '''

    outputs['features'] = ["First of all, it's valuable to take a gander at Ripple as something totally unique in relation to Bitcoin. Swell is a back-end framework and not a customer confronting item. Ripple isn't a cash. It's an open source, worldwide trade. Anybody can get to it and everybody has a similar right of utilization. Ripple , the organization, does not control the system, does not gather charges or point of confinement get to.",
                           "Ripple is a circulated and constant installment convention for everything identified with esteem. It is a common open database, with a coordinated disseminated money trade. Ripple is money related rationalist and has a cash segment coordinated specifically into the convention. The Ripple convention is intended to course every exchange to the least expensive cost accessible available.",
                           "Ripple is the primary practical blockchain ever. Notwithstanding an exciting begin (issues of comprehension between the originators, doubt of speculators because of the vital centralization of XRP at the Ripple Labs group), the task is exceptionally encouraging for money related foundations that need to profit by the benefits of the registers conventions disseminated. While Ethereum offers a scope of close interminable yet at the same time creating potential outcomes, the Ripple Labs group concentrated on a disseminated vault show with one basic objective: to make worldwide and cross-bank finances exchanges. The idea of "entryway" is critical on the grounds that it is truly interface between the managing an account world and that of digital forms of money and different blockchains/DLTs."]
    
    return render_template('main/landing_price.html', outputs=outputs)





@main.route('/price-bitcoin-india', methods=['GET'])
def landing_price_dsh():
    outputs = dict()
    outputs['curr'] = 'dsh'
    outputs['currency'] = 'Dash'
    outputs['what_is'] = "Dash is known as Darkcoin and XCoin. It is an open source peer-to-peer cryptocurrency that aims to be the most user-friendly and on-chain-scalable cryptocurrency in the world. it offers instant transactions (InstantSend), private (PrivateSend) and operates a self-governing and self-funding model. It is decentralized governance and budgeting system makes it a decentralized autonomous organization (DAO)"
    
    outputs['price_in_sept17'] ="On 1st September, 2017, the price of Dash in India was INR 24,910 INR. There was fluctuation in the price of DASH and finally it closed the month September, 2017 with DASH to INR 21,224"
    outputs['price_in_oct17']  ="DASH entered into the month of October 2017 with DASH to INR 20,510 and in October 2017 the Dash Master node Tool v0.9 was released and because of that the price of DASH in INR plunged down to 17,834 at the end of October, 2017."
    outputs['price_in_nov17']  ="The month November 2017 was game changing month for DASH. It entered into the month November 2017 with DASH to INR 17,493. By following the reach out to Ukranian exchange markets, the price of dash in india rose up and reached at DASH to INR 51,532 on 30th Nov 2017"
    outputs['price_in_dec17']  ="In 2017, there was a splendid growth in the price of DASH in India. At the end of year 2017 it reached at INR 69,087."
    outputs['price_in_jan18']  ="Dash entered into year 2018 with Initial price of DASH to INR 68019.82. But there was decline in the price of DASH and finally it closed the month January 2018 with DASH to INR 48397.78"
    outputs['price_in_feb18']  ="On 1st February 2018 the initial price of DASH in INR was 44220.88 and at the end of the month DASH was trading at INR 39058.20"
    outputs['price_in_nov18']  ="On 1st November 2018 the price of Dash in INR was 9945 and it is predicted that the maximum price will be INR 12090 and the minimum price will be INR 9360.The change in DASH rate will be 13.7%." 
    outputs['price_in_dec18']  ="It is predicted that in the beginning of December 2018 the price of DASH in INR will be 11310 and the maximum DASH to INR will be 12870 and the minimum price will be INR 10335 The change in DASH rate for December will be 6.3%."

    outputs['about'] = '''Dash is known as Darkcoin and XCoin. It is an open source peer-to-peer cryptocurrency that aims to be the most user-friendly and on-chain-scalable cryptocurrency in the world. it offers instant transactions (InstantSend), private (PrivateSend) and operates a self-governing and self-funding model. It is decentralized governance and budgeting system makes it a decentralized autonomous organization (DAO) 

                            It was originally released as XCoin (XCO) on January 18, 2014. On February 28, the name was changed to "Darkcoin." On March 25, 2015, Darkcoin was rebranded as "Dash." D 

                            Within the first two days of launch, 1.9 million coins were mined, which is approximately 10% of the total supply that will ever be issued. Evan Duffield is the creator and developer of Dash attributed this to a bug created when the Litecoin code was forked to create Dash. 

                            The Dash Core Team who is responsible for developing the currency has since grown to 30 full-time employees, 20 part-time employees, and dozens of unpaid volunteers. All Core Team employees are paid from Dash's budget system and therefore are not reliant on donations or sponsorships that can lead to conflicts of interest. 

                            According to CoinMarketCap, in June 2017 the daily trade volume of Dash was approximately $100 million per day and the market cap of Dash exceeded $4.8 billion. 

                            Dash had been endorsed by Apple in July 2017 to be a piece of digital currencies permitted to show up in their App Store. Regarding this declaration, a Dash Portfolio for Iphone had been discharged and which consolidates the InstantSend highlight. Along these lines, Iphone clients would now be able to test the unique highlights of Dash on the telephone simply like Android clients. 

                            Likewise, Dash was as of late included as a source of perspective money the Bisq distributed exchanging stage, once in the past known as Bitsquare. Clients around the globe would now be able to purchase and offer dash for money or against numerous different digital currencies. 

                            With the Dash, the personality of the clients is covered up. Truth be told, clients make mystery addresses so as to lead exchanges namelessly since they are the main ones to have data on their wallets. Moreover all assets spend a pool and installments are produced using this pool. Accordingly, installments can not be recognized from client A to client B.
                            ''' 
    
    outputs['features'] =  ["Masternodes:- Dash utilizes a two-tier network. The network functions like creating new blocks are handled by the miners and the second tier of the Dash network consists of "masternodes" which perform PrivateSend, InstantSend, and governance functions.",
                            "PrivateSend:- The PrivateSend feature allows masternodes to submit the transactions using special network code called DSTX, It provides additional privacy to users. It Protect your financial information and ensures your activity history and balances are private.",
                            "InstantSend:- InstantSend service allows to send instant transactions. The inputs can be locked to specific transactions and verified by consensus of the masternode network.In this way the conflicting transactions and blocks are rejected. If a consensus cannot be reached then validation of the transaction occurs through standard block confirmation. It solves the double-spending problem without the longer confirmation times of other cryptocurriencies."
                            ];

    return render_template('main/landing_price.html', outputs=outputs)




@main.route('/price-litecoin-india', methods=['GET'])
def landing_price_ltc():
    outputs = dict()
    outputs['curr'] = 'ltc'
    outputs['currency'] = 'Litecoin'
    outputs['what_is'] = "The Litecoin appeared in 2011 and as a result of it's highlights and capacity to process exchanges at quick speed it turned into the greatest adversary of the prominent cryptographic forms of money like Bitcoin, Ethereum and so on. It utilizes the equivalent block chain innovation of Bitcoin for exchanges yet the greatest favorable position it increased over the Bitcoin is it's speed as it's in excess of multiple times quicker in speed than Bitcoin that is the reason it's called Lite-coin. It takes just 2.5mins.for exchanges"
    
    outputs['price_in_sept17'] ="In August, 2017 the SegWit activated due to that the price of Litecoin in India fluctuated. On 1st September LTC to INR was 5,016. After that the price of LTC in INR started declining and after so many fluctuation in price. It stabilized and at the end of September 2017, The price of litecoin in India was INR 3,381"
    outputs['price_in_oct17']  ="On the 1st October, 2017 the price of LTC in INR was 3,525 and it moved towards the trend and the price of the LTC increased little bit and at the end of October, 2017. LTC to INR was 3,641"
    outputs['price_in_nov17']  ="On 1st November, 2017 The price of litecoin in India was INR 3,433 and it kept growing and moving towards the market trends and finally at the end of the month November 2017, It reached at LTC to INR 5,839"
    outputs['price_in_dec17']  ="There was over night up flow in the price of Litecoin and it entered into the last month of 2017 with price of LTC in INR 6,537 and kept growing with fast speed and finally reached at LTC to INR 15,169 INR on 31st December 2017. This was an unforeseen rise in price of litecoin."
    outputs['price_in_jan18']  ="On the 1st day of year 2018, The price of Litecoin in India was INR 14,721.92 and due to the clamp down by RBI the price of LTC in INR started going down and closed the month January 2018 with LTC to INR 10,430.13"
    outputs['price_in_feb18']  ="On 1st Feb, 2018 the price of LTC in INR was 10,277.65 and there was sprung in the price of litecoin in India and finally at the end of feb, 2018 it reached at LTC to INR 13,818.63"
    outputs['price_in_nov18']  ="The price of Litecoin in India on 1st November 2018 was INR 3674 and It is predicted that Maximum Litecoin price in India for November 2018 will be INR 4181 and while minimum price of litecoin in India will be INR 3255.The change in the LTC rate will be for November -4.7%." 
    outputs['price_in_dec18']  ="It is predicted that In the beginning of December 2018, LTC to INR will be 3500 and maximum price of litecoin in India will be INR 3654, while minimum price will be INR 3176. It is predicted that the change in LTC rate for December -2.4%."

    outputs['about'] = '''When we talk about the cryptocurrency, There are so many cryptocurrencies	available and there is neck to neck competition in the Cryptocurrency market. Because more and more people are investing in cryptocurrencies and Litecoin is always forerunner in the market and maintained it’s position in top 5 cryptocurrencies in the market. 
                        The Litecoin came into existence in 2011 and because of it’s features and ability to process transactions at fast speed it became the biggest rival of the popular cryptocurrencies like Bitcoin,Ethereum etc. It uses the same blockchain technology of Bitcoin for transactions but the biggest advantage it gained over the Bitcoin is it’s speed as it’s more than 4 times faster in speed than Bitcoin that’s why it’s called Lite-coin. It takes only 2.5mins.for transactions''' 
    
    outputs['features'] = ["Liteocin is an online network that can be used to send money",
                           "It is a decentralized payment system and it is not controlled by any entity or government.",
                           "Litecoin generate 84 million currency units while Bitcoin will only be available to 21 million copies.",
                           "The speed of its transactions is very fast as the transactions takes only 2.5 minutes. In comparison, a bitcoin transaction requires 10 minutes.",
                           "Transaction fees of Litecoins are in cents compared to other payment media like credit card companies, bank transactions etc",
                           "All transactions have been recorded on a distributed public ledger called blockchain. Blockchain in a simple word is a register which contains all previous records or transactions done at any given time. So we can verify any transactions at any time with the help of blockchain.",
                           "Adoption of Litecoin is higher as compare to other cryptocurrency .Litecoin has always been in the top currencies by market capitalization.",
                           "Cross-chain atomic swap is used to make transactions across blockchains without using any 3rd party or exchanges which will further reduce the cost and increase the security",
                           "Litecoin has been in the market for a very long time. They have a good community with a lot of developers. Compared to Bitcoin, the transaction cost is very less. When the market crashed in 2017 June, Litecoin was one of those coins that did not dip."
                           ]
    return render_template('main/landing_price.html', outputs=outputs)



@main.route('/price-zcash-india', methods=['GET'])
def landing_price_ltc():
    outputs = dict()
    outputs['curr'] = 'zec'
    outputs['currency'] = 'Zcash'
    outputs['what_is'] = "Zcash is an open source and decentralized cryptocurrency that provides strong privacy protections It’s all about the privacy that’s why people are buying it strongly. It allows the full protection of  the privacy of your transactions. This is the main improvement  over the other coins. It uses advanced cryptographic techniques like zero-knowledge proof to guarantee the validity of transactions without revealing the details.  Because of the encryption of  payment information  and  novel cryptographic method to verify the validity it becomes so popular among the people who afraid of doing online transactions."
    
    outputs['price_in_sept17'] ="On 1st September, 2017, The price of ZEC in INR was 19,584 and the  team Zcash integrated the Bitcpie into their own ecosystem and because of this the regular updates and release of upgrade version on routine basis. There were decline in the price and at the end of September,2017 the Zcash price in India reached at INR 18,114"
    outputs['price_in_oct17']  ="On 1st October, 2017 the ZEC entered into market with ZEC to INR  17,367 and it experienced downfall in the price and in October, 2017, Zcash closed with Zcash price in rupees was INR 15,783.  In the October ZCash got integrated into Bithumb and Cex.io followed by protocol updates and collaborations."
    outputs['price_in_nov17']  ="ZEC entered into the month November 2017 with the Zcash price in India INR 14,352 and in  November 2017, there was growth in the price of  ZEC and it experienced a rapid increase in price. In November 2017, Grayscale launched Zcash Investment Trust and because of this  ZECs price in India spiked and at the end of the month November 2017, It reached at ZEC to INR 30,955. "
    outputs['price_in_dec17']  ="On 1st December,2017 the Zcash price in rupees went down and  reached at 21,463. But there was spike in the price of ZEC and it rose and at the end of December 2017, ZEC to INR was 32,361"
    outputs['price_in_jan18']  ="In 2018, Zcash entered with initial price of ZEC in India was INR 38,136.49 but there was decline in the price of zcash and on 30th Jan, 2018, ZCash finally reached at ZEC to INR 24,754.87 "
    outputs['price_in_feb18']  ="On 1st feb, 2018 the starting price of Zcash in India was  INR 25,217.35 and t increased and on 28th Feb, 2018 it reached at  ZCash price in rupees 26059.57"
    outputs['price_in_nov18']  ="In the beginning of November, 2018 the  ZCash price in rupees was 7540 and it is predicted  that the maximum   ZEC to INR will be 9100 and the minimum ZEC price in India will be 3900 and the ZEC rate change for November will be -43.1%." 
    outputs['price_in_dec18']  ="It is predicted that in the beginning of December , 2018 the ZEC  price in INR will be  at 4290 and the maximum price of ZEC will be 4615 and the minimum price will be 3185. It is predicted that the ZEC rate change for December will be -16.7%."

    outputs['about'] = '''The Zcash was established in 2016 by Zooko Wilcox. The code of Zcash is open source and uses ZK-Snarks innovation to anchor exchanges on its system which enables them to keep up a breakthrough and secure record log while holding unknown data about clients and sums traded amid exchanges. The token will be issued to a most extreme of 21 million duplicates, as Bitcoin. Its mining point of view is that a square of Zcash is found like clockwork 30 seconds, against 10 minutes for Bitcoin. 
                            The ZEC token which depends on a convention called Zero-Knowledge confirmation permits the anonymization of money related trades. Which essentially is to delete the historical backdrop of the token at the season of the exchange.
                        ''' 
    
    outputs['features'] = [
                            "A group made out of cryptographic money heavyweights ",
                            "The mining of Zcash has the breeze in its sails as of late ",
                            "Available on numerous trades ",
                            "Large exchange volumes ",
                            "The issue of the quantity of tokens is constrained "
                           ]
    return render_template('main/landing_price.html', outputs=outputs)



@main.route('/price-monero-india', methods=['GET'])
def landing_price_xmr():
    outputs = dict()
    outputs['curr'] = 'xmr'
    outputs['currency'] = 'Monero'
    
    outputs['what_is'] = ["Monero is gotten from Bytecoin which utilizes a convention named Cryptonote. This convention was distributed in mid 2014 by at least one individuals known by the pen name van Saberhagen."," It was exceptionally generally welcomed by the cryptographers who broke down it.  Without delving into the specialized subtle elements, the obscurity of Monero exchanges depends on one hand on the utilization of a transitory location of the recipient rather than its open location (which secures the person who gets the cash) and then again, on the expansion of 'imaginary' transmitters .","The guarantor and the beneficiary of the exchange are the main ones with the important components to check where the cash originates from and where it is going. ","The expense of the exchange is identified with the coveted dimension of secrecy"]    
    
    outputs['price_in_sept17'] =""
    outputs['price_in_oct17']  ="On 1st October,2017, The Monero Price in India reached at INR 6,071. In October, 2017, The android wallet of monero was released and it released the software named Helium Hydra followed by protocol upgrades due to that the price of Monero started fluctuating. At last it closed the month October 2017 with XMR to INR 5,733"
    outputs['price_in_nov17']  ="It entered into the month November, 2017 with the Monero Price in INR 5,522 and it started growing and finally reached at XMR to INR 11,742 on 30th Nov, 2017"
    outputs['price_in_dec17']  ="Monero price in India reached at INR 12,244 on 1st December 2017  and it kept following the market trend and finally closed the last month of year 2017 with XMR to INR 22,572. "
    outputs['price_in_jan18']  =" Monero entered into the 1st month of 2018 with XMR to INR  22,816.64 on 1st January 2018 and finally Monero price in rupees reached at INR 17,451.02 on 31 January 2018."
    outputs['price_in_feb18']  ="On 1st Feb, 2018 Monero was trading at XMR to INR 17,207.69 and on 28th Feb, 2018 it reached at  INR 19,107.69 "
    outputs['price_in_nov18']  ="In the beginning the Monero price in India was INR 6,825  and it is predicted that the maximum price of Monero in India will be INR 7,475 and the minimum price will be 2,860.  The Monero rate change for November  will be -55.2%. "
    outputs['price_in_dec18']  ="It is predicted that the in  the beginning  of the December 2018, the Monero price in rupees will be INR 3055 and the Maximum XMR to INR  will be 3,380 and the minimum price will be INR 2,210. The Monero rate change for December will be -17.0%."

    
    outputs['about'] = ["Monero is a secure, private, and untraceable digital cryptocurrency. It is open-source and accessible to all.It is decentralized so only user can control and are responsible for your funds. Your accounts and transactions are kept private from prying eyes. Monero is based on the CryptoNote protocol.It aims to improve on existing cryptocurrency design by obscuring sender, recipient and amount of every transaction made. ","Monero was originally launched by pseudonymous author Nicolas van Saberhagen in October 2013. It was originally launched by a Bitcointalk forum user only known as "thankful_for_today" under the name BitMonero that is a compound of Bit (as in Bitcoin) and Monero .Five days later, the currency's supporters opted for the name to be shortened to Monero. In September 2014, Monero was attacked and a flaw in CryptoNote that permitted the creation of two subchains that refused to recognize the validity of transactions on each other. CryptoNote later released a patch for the flaw, which Monero implemented.","Monero experienced rapid growth in market capitalization and transaction volume during the year 2016, partly due to adoption in 2016 by major darknet market AlphaBay","On January 10, 2017, the privacy of Monero transactions were further strengthened by the adoption of Bitcoin Core developer Gregory Maxwell's algorithm Confidential Transactions and  hiding the amounts being transacted, in combination with an improved version of Ring Signatures"] 
    
    outputs['features'] = [
                            "Stealth Address: With Monero, you use a virtual P.O. box instead of your actual address, your transactions cannot be linked back to you.",
                            "Ring Signatures:It  is a way to make sure a transaction can’t be tied back to a specific individual.",
                            "Public-View Key:- You can share your public-view key .With this other people can see your transactions. With the public-view key, regulators can view all of the transactions.",
                            "Built-in Scalability:- Monero is designed with a “look-back” window means the network reviews the preceding transactions and automatically adjusts the size of the blocks to account for transaction volume."
                           ]


    return render_template('main/landing_price.html', outputs=outputs)

