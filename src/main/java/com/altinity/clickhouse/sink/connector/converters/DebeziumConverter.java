package com.altinity.clickhouse.sink.connector.converters;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.TimeUnit;

public class DebeziumConverter {

    public static class MicroTimeConverter {
        /**
         * Function to convert Long(Epoch)
         * to Formatted String(Time)
         * @param value
         * @return
         */
        public static String convert(Object value) {
            Long milliTimestamp = (Long) value / 1000;
            java.util.Date date = new java.util.Date(milliTimestamp);

            SimpleDateFormat bqTimeSecondsFormat = new SimpleDateFormat("HH:mm:ss");
            String formattedSecondsTimestamp = bqTimeSecondsFormat.format(date);
            return formattedSecondsTimestamp;
        }
    }

    public static class TimestampConverter {

        /**
         * Function to convert Debezium Timestamp fields to
         * ISO formatted String.
         * @param value
         * @return
         */
        public static String convert(Object value) {
            LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli((long) value), ZoneId.systemDefault());
            DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;

            return date.format(formatter);
        }
    }

    public static class DateConverter {

        /**
         * Function to convert Debezium Date fields
         * to java.sql.Date
         * @param value
         * @return
         */
        public static Date convert(Object value) {
            long msSinceEpoch = TimeUnit.DAYS.toMillis((Integer) value);
            java.util.Date date = new java.util.Date(msSinceEpoch);
            return new java.sql.Date(date.getTime());
        }
    }

    public static class ZonedTimestampConverter {

        /**
         * Function to convert timestamp(with timezone)
         * to formatted timestamp(DateTime clickhouse)
         * @param value
         * @return
         */
        public static String convert(Object value) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'");
            LocalDateTime zd = LocalDateTime.parse((String) value, formatter);
            DateTimeFormatter destFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            return zd.format(destFormatter);
        }
    }
}