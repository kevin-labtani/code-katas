<?php

use App\RomanNumerals;
use PHPUnit\Framework\TestCase;

/**
 * @internal
 * @coversNothing
 */
class RomanNumeralsTest extends TestCase
{
    /**
     * @test
     * @dataProvider checks
     *
     * @param mixed $number
     * @param mixed $numeral
     */
    public function itGeneratesRomanNumeralsFor1($number, $numeral)
    {
        $this->assertEquals($numeral, RomanNumerals::generate($number));
    }

    public function checks()
    {
        return [
            [1, 'I'],
            [2, 'II'],
            [3, 'III'],
            [4, 'IV'],
            [5, 'V'],
            [6, 'VI'],
            [7, 'VII'],
            [8, 'VIII'],
            [9, 'IX'],
            [10, 'X'],
            [50, 'L'],
            [40, 'XL'],
            [90, 'XC'],
            [100, 'C'],
            [500, 'D'],
            [400, 'CD'],
            [1000, 'M'],
            [900, 'CM'],
            [3999, 'MMMCMXCIX'],
        ];
    }
}
