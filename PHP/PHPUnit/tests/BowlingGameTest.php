<?php

use App\BowlingGame;
use PHPUnit\Framework\TestCase;

/**
 * @internal
 * @coversNothing
 */
class BowlingGameTest extends TestCase
{
    /**
     * @test
     */
    public function itScoresaGutterGameAsZero()
    {
        $game = new BowlingGame();

        foreach (range(1, 20) as $roll) {
            $game->roll(0);
        }

        $this->assertSame(0, $game->score());
    }

    /**
     * @test
     */
    public function itScoresAllOnes()
    {
        $game = new BowlingGame();

        foreach (range(1, 20) as $roll) {
            $game->roll(1);
        }

        $this->assertSame(20, $game->score());
    }

    /**
     * @test
     */
    public function itAwardsaOneRollBonusForEverySpare()
    {
        $game = new BowlingGame();

        $game->roll(5);
        $game->roll(5); // spare

        $game->roll(8);

        foreach (range(1, 17) as $roll) {
            $game->roll(0);
        }

        $this->assertSame(26, $game->score());
    }

    /**
     * @test
     */
    public function itAwardsaTwoRollBonusForEveryStrike()
    {
        $game = new BowlingGame();

        $game->roll(10); // strike

        $game->roll(5);
        $game->roll(2);

        // 10 frames minus 2 frames = 8 frames times 2 rolls per frame = 16
        foreach (range(1, 16) as $roll) {
            $game->roll(0);
        }

        $this->assertSame(24, $game->score());
    }

    /**
     * @test
     */
    public function spareOnFinalFrameGrantsOneExtraBalls()
    {
        $game = new BowlingGame();

        foreach (range(1, 18) as $roll) {
            $game->roll(0);
        }

        $game->roll(5);
        $game->roll(5); // spare

        $game->roll(5);

        $this->assertSame(15, $game->score());
    }

    /**
     * @test
     */
    public function strikeOnFinalFrameGrantsTwoExtraBalls()
    {
        $game = new BowlingGame();

        foreach (range(1, 18) as $roll) {
            $game->roll(0);
        }

        $game->roll(10);

        $game->roll(10);
        $game->roll(10);

        $this->assertSame(30, $game->score());
    }

    /**
     * @test
     */
    public function itScoreaPerfectGame()
    {
        $game = new BowlingGame();

        foreach (range(1, 12) as $roll) {
            $game->roll(10);
        }

        $this->assertSame(300, $game->score());
    }
}
