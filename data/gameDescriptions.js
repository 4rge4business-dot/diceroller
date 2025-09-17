export const DEFAULT_DICE_SETS = [
  { id:'story', title:'Story Dice', type:'2d', count:3, faces:[{icon:'🏰'},{icon:'🐉'},{icon:'🚀'},{icon:'🕵️'},{icon:'🌋'},{icon:'🧙'}] },
  { id:'emoji', title:'Emoji Dice', type:'2d', count:2, faces:[{icon:'😄'},{icon:'😡'},{icon:'😱'},{icon:'😎'},{icon:'🤔'},{icon:'🥳'}] },
  { id:'decision', title:'Decision Dice', type:'2d', count:1, faces:[{text:'Yes'},{text:'No'},{text:'Maybe'},{text:'Try Again'},{text:'Ask a Friend'},{text:'Later'}] },
  { id:'workout', title:'Workout Dice', type:'2d', count:2, faces:[{text:'10 pushups'},{text:'15 squats'},{text:'30s plank'},{text:'20 lunges'},{text:'12 burpees'},{text:'20 jumping jacks'}] },
  { id:'color', title:'Color Dice', type:'2d', count:3, faces:[{text:'#FF6B6B'},{text:'#6BCB77'},{text:'#4D96FF'},{text:'#FFB86B'},{text:'#845EC2'},{text:'#FFC75F'}] },
  { id:'adventure', title:'Adventure Dice', type:'3d', count:3, faces:[{icon:'🌋'},{icon:'🏜️'},{icon:'🏰'},{icon:'🤖'},{icon:'🧭'},{icon:'🎯'}] },
  { id:'improv', title:'Improv Dice', type:'2d', count:3, faces:[{text:'Angry'},{text:'Lost'},{text:'Old Object'},{text:'Friendship'},{text:'Surprise'},{text:'Mysterious'}] },
  { id:'character', title:'Character Dice', type:'3d', count:3, faces:[{text:'Brave'},{text:'Clumsy'},{text:'Genius'},{text:'Shy'},{text:'Greedy'},{text:'Kind'}] },
  { id:'rpg', title:'RPG Dice', type:'3d', count:1, faces:[{text:'d20'},{text:'d12'},{text:'d10'},{text:'d8'},{text:'d6'},{text:'d4'}] }
]

export const GAME_DESCRIPTIONS = [
  { id:'story', title:'Story Dice', blurb:'Story Dice spark creativity by rolling icons instead of numbers. Each side shows objects, characters, or places, and the combination inspires you to invent a story. Writers use them for prompts, teachers for classroom fun, and gamers for role-playing sessions. Just roll and see what wild scenarios you get.' },
  { id:'emoji', title:'Emoji Dice', blurb:'Emoji Dice replace numbers with faces and symbols. Rolling creates random combinations of moods, expressions, or objects. Great for social games, icebreakers, or just a laugh with friends.' },
  { id:'decision', title:'Decision Dice', blurb:'Stuck making a choice? Decision Dice give simple answers: Yes, No, Maybe, Ask Again, Later, or Try It. Roll to let chance decide. It’s like a pocket Magic 8-Ball for everyday questions.' },
  { id:'workout', title:'Workout Dice', blurb:'Turn fitness into a game! Each roll tells you an exercise and a rep count. Do pushups, squats, planks, lunges, or burpees in random order. Perfect for quick workouts at home or adding variety to your routine.' },
  { id:'color', title:'Color Dice', blurb:'Artists and designers can roll Color Dice to discover random palettes. Each face shows a vibrant swatch or hex code. Combine two or three rolls for inspiration when working on digital art, design, or even fashion.' },
  { id:'adventure', title:'Adventure Dice', blurb:'Adventure Dice create instant quest ideas. One die might show locations (jungle, cave, castle), another shows villains (pirate, robot, sorcerer), and another shows goals (treasure, rescue, discovery). Roll them together and you’ve got a ready-made story hook.' },
  { id:'improv', title:'Improv Dice', blurb:'Improv Dice are perfect for acting and drama games. Each roll gives prompts like emotions, objects, or settings that performers must use in a scene. Great for theater warmups, party games, or classroom fun.' },
  { id:'character', title:'Character Dice', blurb:'Character Dice generate personalities by mixing traits like “brave,” “clumsy,” “genius,” or “silly.” Roll a few dice to instantly create a quirky character for your story or RPG campaign.' },
  { id:'rpg', title:'RPG Dice', blurb:'RPG Dice bring tabletop flavor to the web. Roll virtual polyhedral dice for quick game decisions or character generation. The d20, d12, d10, d8, d6, and d4 are available in immersive 3D.' }
]
