<?php

// The goal is to knock down all ten pins
// • Each frame consists of throwing the ball twice to knock down all the pins
// • If you knock down all the pins with the first ball, it is called a "strike"
// • If you knock down all the pins with the second ball, it is called a "spare"
// • Each games consists of ten frames. If you bowl a strike in the tenth frame, you get
// two more balls. If you throw a spare, you get one more ball.
// • Open frames are frames without a strike or spare
// • Scoring is based on the number of pins you knock down. However, if you bowl a
// spare, you get to add the pins in your next ball to that frame. For strikes, you get
// the next two balls.

namespace App;

class BowlingGame
{
    const FRAMES_PER_GAME = 10;
    protected array $rolls = [];

    public function roll(int $pins)
    {
        $this->rolls[] = $pins;
    }

    public function score()
    {
        $score = 0;
        $roll = 0;

        foreach (range(1, self::FRAMES_PER_GAME) as $frame) {
            if ($this->isStrike($roll)) {
                $score += $this->rolls[$roll]; // add current roll

                $score += $this->strikeBonus($roll); // add bonus

                ++$roll; // got a strike

                continue; // no need for else if statements this way
            }

            if ($this->isSpare($roll)) {
                $score += $this->defaultScore($roll);

                $score += $this->spareBonus($roll);

                $roll += 2;

                continue;
            }

            $score += $this->defaultScore($roll);

            $roll += 2;
        }

        return $score;
    }

    protected function isStrike(int $roll)
    {
        return 10 === $this->rolls[$roll];
    }

    protected function isSpare(int $roll)
    {
        return 10 === $this->defaultScore($roll);
    }

    protected function defaultScore(int $roll)
    {
        return $this->rolls[$roll] + $this->rolls[$roll + 1];
    }

    protected function strikeBonus(int $roll)
    {
        return $this->rolls[$roll + 1] + $this->rolls[$roll + 2];
    }

    protected function spareBonus(int $roll)
    {
        return $this->rolls[$roll + 2];
    }
}
