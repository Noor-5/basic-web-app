export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("nmostafa")) {
    return (
      "Your AndrewID."
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Noor"
    );
  }

  const queryRegex = /Which of the following numbers is the largest:\s*((\d+\s*,\s*)+\d+)\s*\?/i;

  if (queryRegex.test(query)) {
    const match = query.match(queryRegex);
    if (match != null){
      const numbersString = match[1]; // Extract the matched numbers string
      const numbers = numbersString.match(/\d+/g);
      if (numbers) {
        // Convert the matched numbers from strings to integers
        const numbersArray = numbers.map(Number);
  
        // Find the largest number in the array
        const largestNumber = Math.max(...numbersArray);
  
        return `${largestNumber}`;
      } 
    }
    


    return (
      ""
    );
  }

  return "";
}
