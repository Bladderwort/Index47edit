---
title: Serial Peripheral Interface
aliases: [SPI]
---

**Serial Peripheral Interface** is a high-speed communication protocol available on the **REV Control Hub and Expansion Hub**. It uses four wires — MOSI, MISO, SCLK, and CS — and is faster than I2C, making it useful for devices that need to transfer data quickly. In FTC, SPI is **less** commonly used than **I2C** because fewer FTC-legal sensors use it, but it shows up with some advanced setups like external IMUs or custom sensor boards. Each hub has one SPI port. SPI only supports one device per CS line, so it doesn't chain as easily as I2C.
