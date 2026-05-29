---
title: Serial Peripheral Interface
aliases: [SPI]
---

__Serial Peripheral Interface__ is a high-speed communication protocol available on the __REV Control Hub and Expansion Hub__. It uses four wires — MOSI, MISO, SCLK, and CS — and is faster than I2C, making it useful for devices that need to transfer data quickly. In FTC, SPI is __less__ commonly used than __I2C__ because fewer FTC-legal sensors use it, but it shows up with some advanced setups like external IMUs or custom sensor boards. Each hub has one SPI port. SPI only supports one device per CS line, so it doesn't chain as easily as I2C.

---