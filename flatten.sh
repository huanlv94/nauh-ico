#!/usr/bin/env bash

rm -rf flats/*
./node_modules/.bin/truffle-flattener contracts/NauhToken.sol > flats/NauhToken_flat.sol

./node_modules/.bin/truffle-flattener contracts/NauhCrowdsale.sol > flats/NauhCrowdsale_flat.sol

./node_modules/.bin/truffle-flattener contracts/Payment.sol > flats/Payment_flat.sol