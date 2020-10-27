<?php

use App\PrimeFactors;
use PHPUnit\Framework\TestCase;

/**
 * @internal
 * @coversNothing
 */
class PrimeFactorsTest extends TestCase
{
    /**
     * @test
     * @dataProvider factors
     *
     * @param mixed $number
     * @param mixed $expected
     */
    public function itGeneratesPrimeFactorsFor1($number, $expected)
    {
        $factors = new PrimeFactors();

        $this->assertEquals($expected, $factors->generate($number));
    }

    public function factors()
    {
        return [
            [1, []],
            [2, [2]],
            [3, [3]],
            [4, [2, 2]],
            [5, [5]],
            [6, [2, 3]],
            [8, [2, 2, 2]],
        ];
    }
}
