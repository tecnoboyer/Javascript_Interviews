function getRandomRPS(): "rock" | "paper" | "scissors" {
    const choices = ["rock", "paper", "scissors"] as const;
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}       

console.log(getRandomRPS());
