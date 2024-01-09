import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {
     articles = [
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Lawrence Strauss",
              "title": "The Best Stock Funds of 2023",
              "description": "The ‘Magnificent Seven’ tech stocks helped drive a rebound at many large-cap funds after a dismal 2022. The winner surged 65.2%.",
              "url": "https://www.wsj.com/finance/investing/best-stock-funds-of-2023-90d12279",
              "urlToImage": "https://images.wsj.net/im-908091/social",
              "publishedAt": "2024-01-07T20:18:42Z",
              "content": "Large-cap companies led the way in 2023, benefiting the money managers who believed in them.\r\nDriven by a rebound in large and megacap stocks, in particular the Magnificent Seven technology companies… [+238 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Inside the Cabin: 'Is It OK if I Hold Your Hand?'",
              "description": "Passengers recount harrowing experience after a chunk of the plane broke off midair",
              "url": "https://www.wsj.com/us-news/theres-a-hole-in-row-26-inside-the-cabin-of-alaska-airlines-flight-1282-3f55608e",
              "urlToImage": "https://images.wsj.net/im-909059/social",
              "publishedAt": "2024-01-07T15:00:04Z",
              "content": "‘Is It OK if I Hold Your Hand?’: Inside the Cabin of Alaska Airlines Flight 1282\r\nA Boeing 737 MAX 9 flight from Alaska Airlines made an emergency landing in Portland, Ore., after a section of the ai… [+948 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Lauren Weber",
              "title": "Why It's So Hard for Robot to Straighten Candle Wick...",
              "description": "For manufacturers, automating work can be a question of surviving long-term labor shortages. Alene Candles is expecting a 20-year process to automate one simple task.",
              "url": "https://www.wsj.com/business/robot-straighten-candle-wick-difficult-e1c80bb8",
              "urlToImage": "https://images.wsj.net/im-901873/social",
              "publishedAt": "2024-01-07T12:46:37Z",
              "content": "To understand one of the biggest challenges American manufacturers face, walk halfway down the assembly line at the Alene Candles factory in New Albany, Ohio. \r\nThats where workers stand on either si… [+299 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Veronica Dagher, Anne Tergesen",
              "title": "Here's What It's Like to Retire on Almost Nothing but Social Security...",
              "description": "Here's What It's Like to Retire on Almost Nothing but Social Security...\r\n\n \n \n \n (Third column, 8th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
              "url": "https://www.wsj.com/personal-finance/retirement-only-social-security-benefits-america-a3a706e0",
              "urlToImage": "https://images.wsj.net/im-908272/social",
              "publishedAt": "2024-01-07T11:49:39Z",
              "content": "Many Americans reach retirement with almost no savings. No 401(k). Few investments. And almost no income aside from a monthly Social Security check.\r\nRoughly one in seven Social Security recipients a… [+369 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Micah Maidenberg",
              "title": "‘Pretty Terrifying’: Investigators Start Probe Into Blowout on Alaska Airlines Flight 1282",
              "description": "Officials from the National Transportation Safety Board have arrived in Portland to piece together why a gaping hole opened soon after takeoff",
              "url": "https://www.wsj.com/business/airlines/pretty-terrifying-investigators-start-probe-into-blowout-on-alaska-airlines-flight-1282-e0e9b74e",
              "urlToImage": "https://images.wsj.net/im-909065/social",
              "publishedAt": "2024-01-07T07:34:15Z",
              "content": "PORTLAND, Ore.A federal investigator said the governments probe of a blowout in an Alaska Airlines plane Friday is for now focused on the flight-specific accident rather than the model of the jet in … [+409 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Ashley Wong, John Jurgensen",
              "title": "Can Hollywood's Most Troubled Awards Show Be Saved?",
              "description": "Can Hollywood's Most Troubled Awards Show Be Saved?\r\n\n \n \n \n (Third column, 6th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Jodie Foster says gen Z 'really annoying' to work with...\r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
              "url": "https://www.wsj.com/business/media/golden-globes-hfpa-cbs-jo-koy-43cbb7c3",
              "urlToImage": "https://images.wsj.net/im-908773/social",
              "publishedAt": "2024-01-06T14:55:37Z",
              "content": "Everything you need to know about the rebirth of the Golden Globe Awardsand the stakes for the fast-changing entertainment industrycan be summed up by one of its new categories: a prize explicitly re… [+524 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Alison Sider",
              "title": "Alaska Airlines Jet Makes Emergency Landing After Boeing 737 MAX Rips Open",
              "description": "A plane returned safely to Portland, Ore., after a section ripped away shortly after takeoff",
              "url": "https://www.wsj.com/business/airlines/alaska-airlines-jet-makes-emergency-landing-after-boeing-737-max-rips-open-b3af13fc",
              "urlToImage": "https://images.wsj.net/im-909020/social",
              "publishedAt": "2024-01-06T06:38:09Z",
              "content": "Alaska Airlines will temporarily ground dozens of Boeing 737 MAX jets after a section of one of its new planes ripped away in midair Friday, forcing it to make an emergency landing shortly after take… [+423 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Alexandra Bruell",
              "title": "News Startup Puck Taps Former Twitter Customer Chief as CEO",
              "description": "Sarah Personette will be tasked with helping company expand into new coverage areas and markets",
              "url": "https://www.wsj.com/business/media/news-startup-puck-taps-former-twitter-customer-chief-as-ceo-16f27c06",
              "urlToImage": "https://images.wsj.net/im-908368/social",
              "publishedAt": "2024-01-05T15:19:47Z",
              "content": "Puck tapped the former Twitter executive Sarah Personette as chief executive officer of the news startup, where she will be tasked with shepherding its expansion into new coverage areas and markets.\r… [+355 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Chris Kornelis",
              "title": "Dick Nunis, Walt Disney’s ‘Apprentice’ Who Got the Magic Kingdom Open, Dies at 91",
              "description": "After working at the side of the company’s founder for 10 years, he became a steward of Walt Disney’s vision and the head of his parks",
              "url": "https://www.wsj.com/business/hospitality/dick-nunis-walt-disney-apprentice-dies-at-91-50592674",
              "urlToImage": "https://images.wsj.net/im-908326/social",
              "publishedAt": "2024-01-05T14:56:12Z",
              "content": "When Disneyland opened in 1955, it was, in many ways, a disaster: There were rides out of service, restaurants that ran out of food, soft asphalt that consumed the heels of womens shoesall of it broa… [+529 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Ecstasy-for-Medicine Advocate Raises $100 Million...",
              "description": "Series A funding raises more than $100 million for MAPS amid a flurry of deals by competitors",
              "url": "https://www.wsj.com/finance/legalization-advocate-maps-raises-money-for-pharmaceutical-psychedelics-a0f1ff94",
              "urlToImage": "https://images.wsj.net/im-908605/social",
              "publishedAt": "2024-01-05T14:00:03Z",
              "content": "Ecstasy-for-Medicine Advocate Raises $100 MillionBy Updated Jan. 5, 2024 8:54 am ET\r\nThe Multidisciplinary Association for Psychedelic Studies, a nonprofit leader in the pharmaceutical psychedelics i… [+878 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Debbie Carlson",
              "title": "You Can Buy Gold Bars at COSTCO. But Are They Worth It?",
              "description": "The retailer says that its periodic offers sell out quickly. And some say it’s a pretty good deal, all things considered.",
              "url": "https://www.wsj.com/finance/investing/costco-gold-bars-ff8e60d5",
              "urlToImage": "https://images.wsj.net/im-908210/social",
              "publishedAt": "2024-01-05T12:40:38Z",
              "content": "Ron Williams,a retired Air Force production superintendent in Utah, usually buys gold investment coins and bars from his precious-metals dealer. But when he found 1-ounce gold bars available on Costc… [+278 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Anne Tergesen",
              "title": "Americans’ Required Retirement Income Has Never Been Higher",
              "description": "Fidelity expects IRA distributions for clients to reach $25 billion in 2024, which could have major ramifications",
              "url": "https://www.wsj.com/personal-finance/retirement/retirement-income-higher-d8a26873",
              "urlToImage": "https://images.wsj.net/im-907886/social",
              "publishedAt": "2024-01-05T02:00:00Z",
              "content": "A surging stock market pushed many retirement account balances to new highs in the waning days of 2023. But for those already spending their retirement nest eggs, these higher balances are a mixed bl… [+440 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Mauro Orru",
              "title": "Supermarket Giant Drops Pepsi and Lay’s Over Price Increases",
              "description": "Carrefour ditches PepsiCo products in France, Italy, Spain and Belgium",
              "url": "https://www.wsj.com/business/retail/frances-carrefour-halts-pepsico-product-sales-over-price-hikes-c89ae35a",
              "urlToImage": "https://images.wsj.net/im-908318/social",
              "publishedAt": "2024-01-04T19:53:31Z",
              "content": "One of the worlds biggest supermarket chains said it would drop several PepsiCo products to protest what it called unacceptable price increases, a rare public standoff between a grocer and food maker… [+457 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "ISIS Claims Responsibility for Deadly Bomb Attack at Soleimani Memorial...",
              "description": "Group says two of its operatives detonated explosive belts",
              "url": "https://www.wsj.com/world/middle-east/iran-vows-revenge-over-deadly-bomb-attack-at-soleimani-memorial-523e4f3f",
              "urlToImage": "https://images.wsj.net/im-908145/social",
              "publishedAt": "2024-01-04T19:00:03Z",
              "content": "Islamic State Claims Responsibility for Deadly Bomb Attack at Soleimani Memorial Islamic State militants claimed responsibility Thursday for a pair of bombings that killed dozens of people a day earl… [+1135 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Benjamin Katz",
              "title": "18 Minutes to Evacuate a Burning Plane: Success Story or Cautionary Tale?",
              "description": "18 Minutes to Evacuate a Burning Plane: Success Story or Cautionary Tale?wsj.com",
              "url": "https://www.wsj.com/business/airlines/japan-flight-airline-safety-standards-9b4eda27",
              "urlToImage": "https://images.wsj.net/im-908305/social",
              "publishedAt": "2024-01-04T18:40:47Z",
              "content": "In its certification, Airbus was required to prove that its A350 aircraft can be evacuated in less than 90 seconds. In Tuesdays collision in Japan, the last crew member \r\nescaped the aircraft after 1… [+484 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Sally Satel",
              "title": "Addiction Treatment Can Work Even When It’s Not Voluntary",
              "description": "As Oregon reconsiders its decision to decriminalize hard drugs like fentanyl, research shows that mandating treatment programs for drug addicts can benefit them and the public.",
              "url": "https://www.wsj.com/health/healthcare/addiction-treatment-can-work-even-when-its-not-voluntary-a81f86ac",
              "urlToImage": "https://images.wsj.net/im-906150/social",
              "publishedAt": "2024-01-04T17:00:00Z",
              "content": "In 2020 Oregon voters approved Measure 110, the nations first law decriminalizing possession of small amounts of drugs, including fentanyl, heroin and methamphetamines. Under Measure 110, people cite… [+824 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Erika Mailman",
              "title": "House Was Charming, But There Was Catch: Murder Took Place There...",
              "description": "House Was Charming, But There Was Catch: Murder Took Place There...\r\n\n \n \n \n (Third column, 6th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:The Hidden Force Pushing Mortgage Rates Down...\r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
              "url": "https://www.wsj.com/real-estate/luxury-homes/selling-a-murder-house-3efa4db4",
              "urlToImage": "https://images.wsj.net/im-904920/social",
              "publishedAt": "2024-01-04T16:19:37Z",
              "content": "In Yorktown, Va., a charming, gambrel-roofed house drew James Fioritos attention this summer. He had just sold his home and sought a fixer-upperthis one, listed at $250,000, seemed like a steal in a … [+602 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Greg Ip",
              "title": "The Future Is Bright if You Know Where to Look",
              "description": "A burst of advances in artificial intelligence, medicine and elsewhere promise a better life down the road",
              "url": "https://www.wsj.com/tech/ai/the-future-is-bright-if-you-know-where-to-look-98874b3d",
              "urlToImage": "https://images.wsj.net/im-908133/social",
              "publishedAt": "2024-01-04T15:18:21Z",
              "content": "It is time for an optimistic take on the economy. Im not talking about whether inflation keeps coming down, or recession is avoided. Rather, Im talking about progress on some of humanitys most intrac… [+464 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Robbie Whelan",
              "title": "Disney Day Drinkers Club (Yes, That Exists) Feuds With Epcot Over Trashy Mascot",
              "description": "Outrage erupts after ‘Binny,’ a symbol adopted by tippling superfans is moved; ‘Oh my gosh—why would they do this?’",
              "url": "https://www.wsj.com/lifestyle/disney-day-drinkers-club-binny-trashcan-mascot-06566cd0",
              "urlToImage": "https://images.wsj.net/im-906764/social",
              "publishedAt": "2024-01-04T14:57:00Z",
              "content": "WALT DISNEY WORLDStaff at Disneys Epcot theme park recently decided to relocate a nondescript garbage can. For the trash bins thousands of admirers, \r\nDisneys decision to tinker with it was rubbish. … [+334 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Joshua Robinson",
              "title": "Newest Sports Prodigy Is 16-Year-Old Who Lives on Kebabs and Orange Soda...",
              "description": "Luke Littler, recently a high school junior from northern England, came up just short of becoming the youngest world champion in the history of professional darts",
              "url": "https://www.wsj.com/sports/darts-world-championship-luke-littler-1f2fc9c7",
              "urlToImage": "https://images.wsj.net/im-907619/social",
              "publishedAt": "2024-01-04T12:43:37Z",
              "content": "Luke Littler was one of the few people inside Alexandra Palacethe rowdy, beer-soaked, spiritual home of British dartswho wasnt old enough on Wednesday night to buy himself a drink.\r\nAnd yet, he was t… [+488 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Miles Kruppa, Patience Haggin",
              "title": "Google Is Finally Killing Cookies. Advertisers Still Aren't Ready",
              "description": "Search giant plans to remove a technology seen as critical to the digital-ad industry",
              "url": "https://www.wsj.com/tech/google-is-finally-killing-cookies-advertisers-still-arent-ready-7582fcac",
              "urlToImage": "https://images.wsj.net/im-908067/social",
              "publishedAt": "2024-01-04T12:23:18Z",
              "content": "Google is going forward with sweeping changes to how companies track users onlinemoves that have been years in the making. Advertisers still arent ready.\r\nThe changes, among the biggest in the histor… [+302 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Anna Wilde Mathews",
              "title": "Walgreens To Cut Next Dividend By 48% as New CEO Hints at More Changes",
              "description": "Earnings from Walgreens and Conagra are in focus",
              "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-01-04-2024",
              "urlToImage": "https://images.wsj.net/im-908169/social",
              "publishedAt": "2024-01-04T12:00:43Z",
              "content": "Under pressure to bolster its results, Walgreens Boots Alliance is cutting its next dividend by 48%, to 25 cents a sharea big move for a company that has been known for generous dividends and has pai… [+1547 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Bezos Bets on GOOGLE Challenger Using AI to Upend Internet Search...",
              "description": "Perplexity, with a fraction of Google’s users, raised the largest sum by an internet search startup in recent years",
              "url": "https://www.wsj.com/tech/ai/jeff-bezos-bets-on-a-google-challenger-using-ai-to-try-to-upend-internet-search-0859bda6",
              "urlToImage": "https://images.wsj.net/im-908089/social",
              "publishedAt": "2024-01-04T12:00:06Z",
              "content": "WSJ News Exclusive | Jeff Bezos Bets on a Google Challenger Using AI to Try to Upend Internet SearchBy | Photographs by Carolyn Fong for The Wall Street Journal Jan. 4, 2024 5:30 am ETPerplexity, a s… [+1037 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "The 'CEO' of Hamas Who Found the Money to Attack Israel...",
              "description": "Zaher Jabarin looks after a portfolio of companies that deliver income annually to the militant group",
              "url": "https://www.wsj.com/world/middle-east/the-ceo-of-hamas-who-found-the-money-to-attack-israel-351f2888",
              "urlToImage": "https://images.wsj.net/im-903612/social",
              "publishedAt": "2024-01-04T12:00:06Z",
              "content": "The ‘CEO’ of Hamas Who Found the Money to Attack IsraelWhen Zaher Jabarin ran a Hamas cell in the 1980s, he borrowed cash from his mother to buy weapons. Now, he oversees a financial empire that the … [+1026 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Stocks' Bad Start to '24 Has Forecasters on Edge...",
              "description": "When the S&P 500 drops in January, its average returns for the rest of the year shrink",
              "url": "https://www.wsj.com/finance/stocks/stocks-bad-start-to-2024has-forecasters-on-edge-2fab8498",
              "urlToImage": "https://images.wsj.net/im-908003/social",
              "publishedAt": "2024-01-04T12:00:06Z",
              "content": "Stocks’ Bad Start to 2024 Has Forecasters on EdgeBy Jan. 3, 2024 11:00 pm ET\r\nStocks are off to a bumpy start in the early days of 2024. Proponents of the January Barometer are hoping for a turnaroun… [+919 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "The Hidden Force Pushing Mortgage Rates Down...",
              "description": "The differential between 30-year mortgage rates and benchmark Treasury yields has been shrinking for eight straight weeks",
              "url": "https://www.wsj.com/economy/housing/the-hidden-force-pushing-mortgage-rates-down-5e4146b6",
              "urlToImage": "https://images.wsj.net/im-907987/social",
              "publishedAt": "2024-01-04T12:00:06Z",
              "content": "The Hidden Force Pushing Mortgage Rates DownBy Jan. 4, 2024 5:30 am ET\r\nNovember’s existing home sales report showed sales increased for the first time in six months and prices rose for the fifth str… [+1046 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "What's Best Time to Eat Dinner? Here's the Math...",
              "description": "This is how to calculate the best hour for dinner for your health, sleep and family time",
              "url": "https://www.wsj.com/health/wellness/whats-the-best-time-to-eat-dinner-heres-the-math-0df644ca",
              "urlToImage": "https://images.wsj.net/im-906486/social",
              "publishedAt": "2024-01-04T12:00:06Z",
              "content": "What’s the Best Time to Eat Dinner? Here’s the MathBy Jan. 3, 2024 9:00 pm ETWSJ’s Life & Work team presents Life Math, a series on how to optimize your time in 2024. Today: Settling the controversy … [+720 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Russia Moves Forward With Plans to Buy Iranian Ballistic Missiles...",
              "description": "Moscow in recent weeks has also begun receiving ballistic missiles from North Korea",
              "url": "https://www.wsj.com/world/russia-moves-forward-with-plans-to-buy-iranian-ballistic-missiles-cf3560e4",
              "urlToImage": "https://images.wsj.net/im-908075/social",
              "publishedAt": "2024-01-04T12:00:06Z",
              "content": "WSJ News Exclusive | Russia Moves Forward With Plans to Buy Iranian Ballistic MissilesBy , and Jan. 4, 2024 5:30 am ET\r\nIran-backed groups form a land bridge across the Middle East and connect in an … [+1245 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Colin Kellaher",
              "title": "APA to Buy Callon Petroleum in $4.5 Billion Deal",
              "description": "",
              "url": "https://www.wsj.com/business/energy-oil/apa-to-buy-callon-petroleum-in-4-5-billion-deal-dcf7a7f6",
              "urlToImage": "https://images.wsj.net/im-105242/social",
              "publishedAt": "2024-01-04T11:26:00Z",
              "content": "Energy company APA has agreed to buy smaller peer Callon Petroleum in a stock-swap deal valued at about $4.5 billion, including assumed debt.\r\nAPA on Thursday said it will issue 1.0425 shares, worth … [+238 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Finding New Job Getting Harder...",
              "description": "Postings fell in 2023 but were still up from prepandemic levels, data from job-listing site Indeed show",
              "url": "https://www.wsj.com/economy/jobs/finding-a-new-job-is-getting-harder-499dcf8e",
              "urlToImage": "https://images.wsj.net/im-907378/social",
              "publishedAt": "2024-01-03T23:00:05Z",
              "content": "Finding a New Job Is Getting HarderBy and Updated Jan. 3, 2024 3:38 pm ET\r\nSoft landing the U.S. economy is like an economic nirvana: inflation is low and the job market is strong. But soft landings … [+1151 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "USA GIVES HOUTHIS ULTIMATUM:STOP SHIP ATTACKS OR ELSEMILITARY PREPS STRIKES",
              "description": "American military readies options to strike Iran-backed rebel group",
              "url": "https://www.wsj.com/world/middle-east/u-s-led-coalition-warns-houthis-to-stop-ship-attacks-cfd490df",
              "urlToImage": "https://images.wsj.net/im-907333/social",
              "publishedAt": "2024-01-03T23:00:05Z",
              "content": "U.S., Allies Give Houthis Ultimatum: Stop Ship Attacks or Face ConsequencesBy , and Updated Jan. 3, 2024 5:30 pm ET\r\nThe Iran-backed Houthi rebel group in Yemen has been ramping up attacks on Israeli… [+1386 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Suzanne Kapner",
              "title": "He Revived Old Spice. Can This CEO Save a Sneaker That Lost Its Cool?",
              "description": "Bracken Darrell is trying to engineer a turnaround at Vans’s parent company. Step one was figuring out where it went wrong.",
              "url": "https://www.wsj.com/business/retail/he-revived-old-spice-can-this-ceo-save-a-sneaker-that-lost-its-cool-f94c89f6",
              "urlToImage": "https://images.wsj.net/im-906405/social",
              "publishedAt": "2024-01-03T15:47:21Z",
              "content": "One of Bracken Darrells first stops as CEO of the company that owns Vans was a visit to the son of its co-founder. \r\nDarrell inspected the memorabilia in the office of Steve Van Doren, who is the bra… [+442 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Inside Flaming Jet, 367 Passengers Had Minutes to Flee. Here's How They Did It...",
              "description": "Vacationer on Japan Airlines plane in Tokyo airport collision recalls a ‘big boom’ and a dash for survival",
              "url": "https://www.wsj.com/business/airlines/inside-a-flaming-jet-367-passengers-had-minutes-to-flee-heres-how-they-did-it-f0e3c2dc",
              "urlToImage": "https://images.wsj.net/im-907653/social",
              "publishedAt": "2024-01-03T12:00:04Z",
              "content": "Inside a Flaming Jet, 367 Passengers Had Minutes to Flee. Here’s How They Did It.TOKYO—It was 18 minutes of terror, confusion and determination to get out alive.A blaze was spreading in the back of t… [+830 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "wsj",
              "title": "Welcome to the Neighborhood! Wall Street Designed It...",
              "description": "Big residential property investors are finding it harder to buy in good neighborhoods, so they are building new ones",
              "url": "https://www.wsj.com/finance/investing/welcome-to-the-neighborhood-wall-street-designed-it-70562612",
              "urlToImage": "https://images.wsj.net/im-905889/social",
              "publishedAt": "2024-01-03T12:00:04Z",
              "content": "Welcome to the Neighborhood! Wall Street Designed ItBy Jan. 3, 2024 5:05 am ET\r\nYour new suburban rental has granite kitchen countertops, built to withstand even the most hard-wearing tenant. The nei… [+1205 chars]"
            },
            {
              "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
              },
              "author": "Dan Gallagher",
              "title": "Tech’s AI Hangover Might Just Be Getting Started",
              "description": "Technology stocks open year with selloff, after the hype over artificial intelligence drove big gains ahead of actual business growth",
              "url": "https://www.wsj.com/finance/stocks/techs-ai-hangover-might-just-be-getting-started-e81ca9f9",
              "urlToImage": "https://images.wsj.net/im-907526/social",
              "publishedAt": "2024-01-03T05:02:00Z",
              "content": "One thing already seems certain about 2024: AI is going to need to start showing the money. Whether it can is a whole other question.\r\nExcitement for generative artificial intelligence sparked by Ope… [+578 chars]"
            },
    ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
        }
    }
  render() {
    return (
        <>
        

      <div className="container my-7">
      <h1 className="text-blockquote my-4"><blockquote class="blockquote">
    <p>All articles published by the Wall Street Journal in the last 6 months</p>
        </blockquote>
        </h1>
       <div className="row my-3">
       {this.state.articles.map((element)=>{
          return   <div className="col md-4 my-2" key={element.url}>
        <NewItem title={element.title} description={element.description.slice(0,88)} url={element.urlToImage} newsurl={element.url}/>
        </div>
        })}

       </div>
     </div>
     </>
    )
  }
}

export default News
