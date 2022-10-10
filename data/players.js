const players = [
  {
    id: 1,
    playerName: "MS Dhoni",
    from: "CSK",
    price: "12 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
    description: "Batsman",
  },
  {
    id: 2,
    playerName: "C Hari Nishaanth",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/7111.png",
    description: "Batsman",
  },
  {
    id: 3,
    playerName: "Devon Conway",
    from: "CSK",
    price: "1 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20572.png",
    description: "Batsman",
  },
  {
    id: 4,
    playerName: "Robin Uthappa",
    from: "CSK",
    price: "2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
    description: "Batsman",
  },
  {
    id: 5,
    playerName: "Ruturaj Gaikwad",
    from: "CSK",
    price: "6 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png",
    description: "Batsman",
  },
  {
    id: 6,
    playerName: "Subhranshu Senapati",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20574.png",
    description: "Batsman",
  },
  {
    id: 7,
    playerName: "Ambati Rayudu",
    from: "CSK",
    price: "6.75 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
    description: "Batsman",
  },
  {
    id: 8,
    playerName: "Ravindra Jadeja",
    from: "CSK",
    price: "16 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
    description: "All-rounder",
  },
  {
    id: 9,
    playerName: "Narayan Jagadeesan",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4942.png",
    description: "Batsman",
  },
  {
    id: 10,
    playerName: "Chris Jordan",
    from: "CSK",
    price: "3.6 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1299.png",
    description: "Bowler",
  },
  {
    id: 11,
    playerName: "Dwaine Pretorius",
    from: "CSK",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20573.png",
    description: "All-rounder",
  },
  {
    id: 12,
    playerName: "Dwayne Bravo",
    from: "CSK",
    price: "4.4 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
    description: "All-rounder",
  },
  {
    id: 13,
    playerName: "Mitchell Santner",
    from: "CSK",
    price: "1.9 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1903.png",
    description: "All-rounder",
  },
  {
    id: 14,
    playerName: "K Bhagath Varma",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/7105.png",
    description: "All-rounder",
  },
  {
    id: 15,
    playerName: "Moeen Ali",
    from: "CSK",
    price: "8 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1735.png",
    description: "All-rounder",
  },
  {
    id: 16,
    playerName: "Rajvardhan Hangargekar",
    from: "CSK",
    price: "1.5 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20571.png",
    description: "Bowler",
  },
  {
    id: 17,
    playerName: "Shivam Dube",
    from: "CSK",
    price: "4 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
    description: "All-rounder",
  },
  {
    id: 18,
    playerName: "Adam Milne",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/434.png",
    description: "Bowler",
  },
  {
    id: 19,
    playerName: "Deepak Chahar",
    from: "CSK",
    price: "14 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/140.png",
    description: "Bowler",
  },
  {
    id: 20,
    playerName: "KM Asif",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4944.png",
    description: "Bowler",
  },
  {
    id: 21,
    playerName: "Maheesh Theekshana",
    from: "CSK",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20570.png",
    description: "Bowler",
  },
  {
    id: 22,
    playerName: "Mukesh Choudhary",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20575.png",
    description: "Bowler",
  },
  {
    id: 23,
    playerName: "Prashant Solanki",
    from: "CSK",
    price: "1.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20576.png",
    description: "Bowler",
  },
  {
    id: 24,
    playerName: "Simarjeet Singh",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/10789.png",
    description: "Bowler",
  },
  {
    id: 25,
    playerName: "Tushar Deshpande",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3257.png",
    description: "Bowler",
  },
  {
    id: 26,
    playerName: "Matheesha Pathirana",
    from: "CSK",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20627.png",
    description: "Bowler",
  },
  {
    id: 27,
    playerName: "Rishabh Pant",
    from: "DC",
    price: "16 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
    description: "Batsman",
  },
  {
    id: 28,
    playerName: "Ashwin Hebbar",
    from: "DC",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/0.png",
    description: "Batsman",
  },
  {
    id: 29,
    playerName: "David Warner",
    from: "DC",
    price: "6.25 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/170.png",
    description: "Batsman",
  },
  {
    id: 30,
    playerName: "Mandeep Singh",
    from: "DC",
    price: "1.1 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
    description: "All-rounder",
  },
  {
    id: 31,
    playerName: "Prithvi Shaw",
    from: "DC",
    price: "7.5 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
    description: "Batsman",
  },
  {
    id: 32,
    playerName: "Rovman Powell",
    from: "DC",
    price: "2.8 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3333.png",
    description: "Batsman",
  },
  {
    id: 33,
    playerName: "K.S Bharat",
    from: "DC",
    price: "2 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2734.png",
    description: "Batsman",
  },
  {
    id: 34,
    playerName: "Tim Seifert",
    from: "DC",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1619.png",
    description: "Batsman",
  },
  {
    id: 35,
    playerName: "Axar Patel",
    from: "DC",
    price: "9 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1113.png",
    description: "All-rounder",
  },
  {
    id: 36,
    playerName: "Kamlesh Nagarkoti",
    from: "DC",
    price: "1.1 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3766.png",
    description: "Bowler",
  },
  {
    id: 37,
    playerName: "Lalit Yadav",
    from: "DC",
    price: "0.65 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/6870.png",
    description: "All-rounder",
  },
  {
    id: 38,
    playerName: "Mitchell Marsh",
    from: "DC",
    price: "6.5 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/221.png",
    description: "All-rounder",
  },
  {
    id: 39,
    playerName: "Pravin Dubey",
    from: "DC",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3188.png",
    description: "Bowler",
  },
  {
    id: 40,
    playerName: "Ripal Patel",
    from: "DC",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/17191.png",
    description: "Batsman",
  },
  {
    id: 41,
    playerName: "Sarfaraz Khan",
    from: "DC",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1564.png",
    description: "Batsman",
  },
  {
    id: 42,
    playerName: "Vicky Ostwal",
    from: "DC",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20624.png",
    description: "Bowler",
  },
  {
    id: 43,
    playerName: "Yash Dhull",
    from: "DC",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20623.png",
    description: "Batsman",
  },
  {
    id: 44,
    playerName: "Anrich Nortje",
    from: "DC",
    price: "6.5 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5433.png",
    description: "Bowler",
  },
  {
    id: 45,
    playerName: "Chetan Sakariya",
    from: "DC",
    price: "4.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/11062.png",
    description: "Bowler",
  },
  {
    id: 46,
    playerName: "Kuldeep Yadav",
    from: "DC",
    price: "2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/261.png",
    description: "Bowler",
  },
  {
    id: 47,
    playerName: "Lungi Ngidi",
    from: "DC",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3746.png",
    description: "Bowler",
  },
  {
    id: 48,
    playerName: "Mustafizur Rahman",
    from: "DC",
    price: "2 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1594.png",
    description: "Bowler",
  },
  {
    id: 49,
    playerName: "Shardul Thakur",
    from: "DC",
    price: "10.75 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1745.png",
    description: "Bowler",
  },
  {
    id: 50,
    playerName: "Khaleel Ahmed",
    from: "DC",
    price: "5.25 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2964.png",
    description: "Bowler",
  },
  {
    id: 51,
    playerName: "Hardik Pandya",
    from: "GT",
    price: "15 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
    description: "All-rounder",
  },
  {
    id: 52,
    playerName: "Abhinav Manohar",
    from: "GT",
    price: "2.6 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20589.png",
    description: "Batsman",
  },
  {
    id: 53,
    playerName: "David Miller",
    from: "GT",
    price: "3 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/187.png",
    description: "Batsman",
  },
  {
    id: 54,
    playerName: "Rahmanullah Gurbaz",
    from: "GT",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20625.png",
    description: "Batsman",
  },
  {
    id: 55,
    playerName: "Shubman Gill",
    from: "GT",
    price: "8 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png",
    description: "Batsman",
  },
  {
    id: 56,
    playerName: "Matthew Wade",
    from: "GT",
    price: "2.4 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/290.png",
    description: "Batsman",
  },
  {
    id: 57,
    playerName: "Wriddhiman Saha",
    from: "GT",
    price: "1.9 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/16.png",
    description: "Batsman",
  },
  {
    id: 58,
    playerName: "B. Sai Sudharsan",
    from: "GT",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20592.png",
    description: "All-rounder",
  },
  {
    id: 59,
    playerName: "Darshan Nalkande",
    from: "GT",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4447.png",
    description: "All-rounder",
  },
  {
    id: 60,
    playerName: "Dominic Drakes",
    from: "GT",
    price: "1.1 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5145.png",
    description: "Bowler",
  },
  {
    id: 61,
    playerName: "Gurkeerat Mann Singh",
    from: "GT",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/253.png",
    description: "Batsman",
  },
  {
    id: 62,
    playerName: "Jayant Yadav",
    from: "GT",
    price: "1.7 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png",
    description: "Bowler",
  },
  {
    id: 63,
    playerName: "Pradeep Sangwan",
    from: "GT",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/91.png",
    description: "Bowler",
  },
  {
    id: 64,
    playerName: "Rahul Tewatia",
    from: "GT",
    price: "9 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1749.png",
    description: "Bowler",
  },
  {
    id: 65,
    playerName: "Vijay Shankar",
    from: "GT",
    price: "1.4 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1083.png",
    description: "All-rounder",
  },
  {
    id: 66,
    playerName: "Alzarri Joseph",
    from: "GT",
    price: "2.4 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3098.png",
    description: "Bowler",
  },
  {
    id: 67,
    playerName: "Lockie Ferguson",
    from: "GT",
    price: "10 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3729.png",
    description: "Bowler",
  },
  {
    id: 68,
    playerName: "Mohammad Shami",
    from: "GT",
    price: "6.25 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png",
    description: "Bowler",
  },
  {
    id: 69,
    playerName: "Noor Ahmad",
    from: "GT",
    price: "0.3 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20590.png",
    description: "Bowler",
  },
  {
    id: 70,
    playerName: "Sai Kishore",
    from: "GT",
    price: "3 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/7123.png",
    description: "Bowler",
  },
  {
    id: 71,
    playerName: "Rashid Khan",
    from: "GT",
    price: "15 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png",
    description: "Bowler",
  },
  {
    id: 72,
    playerName: "Varun Aaron",
    from: "GT",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/61.png",
    description: "Bowler",
  },
  {
    id: 73,
    playerName: "Yash Dayal",
    from: "GT",
    price: "3.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20591.png",
    description: "Bowler",
  },
  {
    id: 74,
    playerName: "Shreyas Iyer",
    from: "KKR",
    price: "12.25 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
    description: "Batsman",
  },
  {
    id: 75,
    playerName: "Ajinkya Rahane",
    from: "KKR",
    price: "1 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/135.png",
    description: "Batsman",
  },
  {
    id: 76,
    playerName: "Rinku Singh",
    from: "KKR",
    price: "0.55 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
    description: "Batsman",
  },
  {
    id: 77,
    playerName: "Aaron Finch",
    from: "KKR",
    price: "1.5 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/167.png",
    description: "Batsman",
  },
  {
    id: 78,
    playerName: "Abhijeet Tomar",
    from: "KKR",
    price: "0.4 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
    description: "Batsman",
  },
  {
    id: 79,
    playerName: "Ramesh Kumar",
    from: "KKR",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20582.png",
    description: "All-rounder",
  },
  {
    id: 80,
    playerName: "Pratham Singh",
    from: "KKR",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20583.png",
    description: "Batsman",
  },
  {
    id: 81,
    playerName: "Sam Billings",
    from: "KKR",
    price: "2 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2756.png",
    description: "Batsman",
  },
  {
    id: 82,
    playerName: "Sheldon Jackson",
    from: "KKR",
    price: "0.6 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1116.png",
    description: "Batsman",
  },
  {
    id: 83,
    playerName: "Pat Cummins",
    from: "KKR",
    price: "15.5 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
    description: "Bowler",
  },
  {
    id: 84,
    playerName: "Mohammad Nabi",
    from: "KKR",
    price: "1 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/618.png",
    description: "Bowler",
  },
  {
    id: 85,
    playerName: "Nitish Rana",
    from: "KKR",
    price: "8 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2738.png",
    description: "Batsman",
  },
  {
    id: 86,
    playerName: "Shivam Mavi",
    from: "KKR",
    price: "3 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3779.png",
    description: "All-rounder",
  },
  {
    id: 87,
    playerName: "Anukul Roy",
    from: "KKR",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3774.png",
    description: "All-rounder",
  },
  {
    id: 88,
    playerName: "Chamika Karunaratne",
    from: "KKR",
    price: "0.5 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20579.png",
    description: "All-rounder",
  },
  {
    id: 89,
    playerName: "Aman Khan",
    from: "KKR",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20581.png",
    description: "Batsman",
  },
  {
    id: 90,
    playerName: "Andre Russell",
    from: "KKR",
    price: "12 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/177.png",
    description: "All-rounder",
  },
  {
    id: 91,
    playerName: "Venkatesh Iyer",
    from: "KKR",
    price: "8 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/8540.png",
    description: "All-rounder",
  },
  {
    id: 92,
    playerName: "Umesh Yadav",
    from: "KKR",
    price: "2 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/59.png",
    description: "Bowler",
  },
  {
    id: 93,
    playerName: "Harshit Rana",
    from: "KKR",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20626.png",
    description: "Bowler",
  },
  {
    id: 94,
    playerName: "Tim Southee",
    from: "KKR",
    price: "1.5 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/307.png",
    description: "Bowler",
  },
  {
    id: 95,
    playerName: "Ashok Sharma",
    from: "KKR",
    price: "0.55 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
    description: "Bowler",
  },
  {
    id: 96,
    playerName: "Sunil Narine",
    from: "KKR",
    price: "6 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/203.png",
    description: "Bowler",
  },
  {
    id: 97,
    playerName: "Varun Chakaravarthy",
    from: "KKR",
    price: "8.4 Cr",
    isPlaying: true,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5432.png",
    description: "Bowler",
  },
  {
    id: 98,
    playerName: "Rasikh Dar",
    from: "KKR",
    price: "0.2 Cr",
    isPlaying: false,
    playerImgUrl: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20577.png",
    description: "Bowler",
  },
];

export { players };
