// MIU 1207 
// Project 
// Anthony Torrez

var json = {
	"book1": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Burned"],
		"author": ["Author:", "J.F. Lewis"],
		"isbn": ["ISBN:", "978-1-4516-5186-7"],
		"comments": ["Comments:", "Cool"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "Void City"],
		"seriesnum": ["Series Number:", "4"],
		"date": ["Date:", "3-20-2011"]
	},
	"book2": {
		"genre": ["Genre:", "Computers & Technology"],
		"btitle": ["Book Title:", "Javascript Cookbook"],
		"author": ["Author:", "Shelley Powers"],
		"isbn": ["ISBN:", "978-0-596-80613-2"],
		"comments": ["Comments:", "Good"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "1-10-2011"]
	},
	"book3": {
		"genre": ["Genre:", "Computers & Technology"],
		"btitle": ["Book Title:", "JavaScript in Easy Steps"],
		"author": ["Author:", "Mike McGrath"],
		"isbn": ["ISBN:", "978-1-84078-362-9"],
		"comments": ["Comments:", "Cool"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "7-4-2011"]
	},
	"book4": {
		"genre": ["Genre:", "Education & Reference"],
		"btitle": ["Book Title:", "Rich Dad, Poor Dad"],
		"author": ["Author:", "Robert T. Kiyosaki"],
		"isbn": ["ISBN:", "0-446-67745-0"],
		"comments": ["Comments:", "Insightful"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2002-07-29"]
	},
	"book5": {
		"genre": ["Genre:", "Education & Reference"],
		"btitle": ["Book Title:", "Dermo"],
		"author": ["Author:", "Edward Topol"],
		"isbn": ["ISBN:", "0-452-2745-0"],
		"comments": ["Comments:", "Excellent"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2004-03-30"]
	},
	"book6": {
		"genre": ["Genre:", "Education & Reference"],
		"btitle": ["Book Title:", "Becoming A Person Of Influence"],
		"author": ["Author:", "John C. Maxwell"],
		"isbn": ["ISBN:", "0-7852-7100-7"],
		"comments": ["Comments:", "Excellent"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2001-11-25"]
	},
	"book7": {
		"genre": ["Genre:", "Education & Reference"],
		"btitle": ["Book Title:", "The 21 irrefutable Laws of Leadership"],
		"author": ["Author:", "John C. Maxwell"],
		"isbn": ["ISBN:", "0-7852-7431-6"],
		"comments": ["Comments:", "Interesting"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2001-10-15"]
	},
	"book8": {
		"genre": ["Genre:", "Education & Reference"],
		"btitle": ["Book Title:", "Easy Russian Phrasebook & Dictionary"],
		"author": ["Author:", "Ann Rolbin"],
		"isbn": ["ISBN:", "0-8442-5279-2"],
		"comments": ["Comments:", "Good"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2004-02-14"]
	},
	"book9": {
		"genre": ["Genre:", "Computers & Technology"],
		"btitle": ["Book Title:", "Designing Interfaces"],
		"author": ["Author:", "Jenifer Tidwell"],
		"isbn": ["ISBN:", "978-1-449-37970-4"],
		"comments": ["Comments:", "Cool"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2012-06-19"]
	},
	"book10": {
		"genre": ["Genre:", "Cookbooks, Food & Wine"],
		"btitle": ["Book Title:", "The Best From The Bottle"],
		"author": ["Author:", "Mark Schneider"],
		"isbn": ["ISBN:", "0-8256-3157-2"],
		"comments": ["Comments:", "Intoxicating"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "1983-05-20"]
	},
	"book11": {
		"genre": ["Genre:", "Medical"],
		"btitle": ["Book Title:", "The 8-Week Cholesterol Cure"],
		"author": ["Author:", "Robert E. Kowalski"],
		"isbn": ["ISBN:", "0-06-015613-9"],
		"comments": ["Comments:", "It works!  Surprised the hell out of my doctor!"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "1988-07-22"]
	},
	"book12": {
		"genre": ["Genre:", "Self Help"],
		"btitle": ["Book Title:", "Awaken The Giant Within"],
		"author": ["Author:", "Anthony Robbins"],
		"isbn": ["ISBN:", "0-671-79154-0"],
		"comments": ["Comments:", "Cool"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2001-09-13"]
	},
	"book13": {
		"genre": ["Genre:", "Medical"],
		"btitle": ["Book Title:", "Get Control of Your Blood Sugar"],
		"author": ["Author:", "Gary Scheiner, M.S., C.D.E."],
		"isbn": ["ISBN:", "978-1-4127-4626-7"],
		"comments": ["Comments:", "Nice"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2009-02-02"]
	},
	"book14": {
		"genre": ["Genre:", "Medical"],
		"btitle": ["Book Title:", "The 30 Day Diabetes Cure"],
		"author": ["Author:", "Dr. Stefan Ripich ND, CNP"],
		"isbn": ["ISBN:", "978-0-9844907-1-4"],
		"comments": ["Comments:", "Good"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2009-05-25"]
	},
	"book15": {
		"genre": ["Genre:", "Religion & Spirituality"],
		"btitle": ["Book Title:", "New Testament"],
		"author": ["Author:", "Most Rev. Donald E. Pilarczyk"],
		"isbn": ["ISBN:", "158516165-9"],
		"comments": ["Comments:", "Rev. Pilarczyk was the one who did the English translation"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "09-10-2011"]
	},
	"book16": {
		"genre": ["Genre:", "Medical"],
		"btitle": ["Book Title:", "Low Cost Natural Cures for Your Dog and Cat"],
		"author": ["Author:", "Dr. John Heinerman"],
		"isbn": ["ISBN:", "1-882330-91-9"],
		"comments": ["Comments:", "Helpful"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2008-10-13"]
	},
	"book17": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Kitty and the Silver Bullet"],
		"author": ["Author:", "Carrie Vaughn"],
		"isbn": ["ISBN:", "978-0-446-61875-5"],
		"comments": ["Comments:", "Excellent Story"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "A Werewolf Named Kitty"],
		"seriesnum": ["Series Number:", "4"],
		"date": ["Date:", "2008-08-08"]
	},
	"book18": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Kitty and the Midnight Hour"],
		"author": ["Author:", "Carrie Vaughn"],
		"isbn": ["ISBN:", "0-446-61641-9"],
		"comments": ["Comments:", "Excellent"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "A Werewolf Named Kitty"],
		"seriesnum": ["Series Number:", "1"],
		"date": ["Date:", "7-4-2011"]
	},
	"book19": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Kitty and the Dead Man's Hand"],
		"author": ["Author:", "Carrie Vaughn"],
		"isbn": ["ISBN:", "978-0-446-19953-7"],
		"comments": ["Comments:", "Entertaining"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "A Werewolf Named Kitty"],
		"seriesnum": ["Series Number:", "5"],
		"date": ["Date:", "2009-08-25"]
	},
	"book20": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Kitty Goes to Washington"],
		"author": ["Author:", "Carrie Vaughn"],
		"isbn": ["ISBN:", "0-446-61642-7"],
		"comments": ["Comments:", "Good"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "A Werewolf Named Kitty"],
		"seriesnum": ["Series Number:", "2"],
		"date": ["Date:", "2006-07-28"]
	},
	"book21": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Kitty Takes a Holiday"],
		"author": ["Author:", "Carrie Vaughn"],
		"isbn": ["ISBN:", "978-0-446-61874-8"],
		"comments": ["Comments:", "Nice"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "A Werewolf Named Kitty"],
		"seriesnum": ["Series Number:", "3"],
		"date": ["Date:", "2007-07-03"]
	},
	"book22": {
		"genre": ["Genre:", "Medical"],
		"btitle": ["Book Title:", "Reversing Diabetes"],
		"author": ["Author:", "Julian Whitaker, M.D."],
		"isbn": ["ISBN:", "0-446-67658-6"],
		"comments": ["Comments:", "Helpful"],
		"series": ["Series:", "No"],
		"seriesname": ["Series Name:", ""],
		"seriesnum": ["Series Number:", ""],
		"date": ["Date:", "2006-08-17"]
	},
	"book23": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Embraced by Darkness"],
		"author": ["Author:", "Keri Arthur"],
		"isbn": ["ISBN:", "978-0-553-58961-0"],
		"comments": ["Comments:", "Good"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "Riley Jenson Guardian"],
		"seriesnum": ["Series Number:", "5"],
		"date": ["Date:", "2007-08-20"]
	},
	"book24": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Kissing Sin"],
		"author": ["Author:", "Keri Arthur"],
		"isbn": ["ISBN:", "978-0-553-58348-0"],
		"comments": ["Comments:", "Cool"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "Riley Jenson Guardian"],
		"seriesnum": ["Series Number:", "2"],
		"date": ["Date:", "2007-02-20"]
	},
	"book25": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Full Moon Rising"],
		"author": ["Author:", "Keri Arthur"],
		"isbn": ["ISBN:", "978-0-553-58845-3"],
		"comments": ["Comments:", "Good"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "Riley Jenson Guardian"],
		"seriesnum": ["Series Number:", "1"],
		"date": ["Date:", "2007-01-15"]
	},
	"book26": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Dangerous Games"],
		"author": ["Author:", "Keri Arthur"],
		"isbn": ["ISBN:", "978-0-553-58959-7"],
		"comments": ["Comments:", "Cool"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "Riley Jenson Guardian"],
		"seriesnum": ["Series Number:", "4"],
		"date": ["Date:", "2007-04-29"]
	},
	"book27": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "Tempting Evil"],
		"author": ["Author:", "Keri Arthur"],
		"isbn": ["ISBN:", "978-0-553-58847-7"],
		"comments": ["Comments:", "Good"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "Riley Jenson Guardian"],
		"seriesnum": ["Series Number:", "5"],
		"date": ["Date:", "2007-03-27"]
	},
	"book28": {
		"genre": ["Genre:", "Sci Fi & Fantasy"],
		"btitle": ["Book Title:", "The Darkest Kiss"],
		"author": ["Author:", "Keri Arthur"],
		"isbn": ["ISBN:", "978-0-553-59114-9"],
		"comments": ["Comments:", "Cool"],
		"series": ["Series:", "Yes"],
		"seriesname": ["Series Name:", "Riley Jenson Guardian"],
		"seriesnum": ["Series Number:", "6"],
		"date": ["Date:", "2008-05-23"]
	}
}

