package com.altinity.clickhouse.sink.connector.db.operations;

import com.clickhouse.jdbc.ClickHouseConnection;

import java.sql.SQLException;

public class ClickHouseCreateDatabase extends ClickHouseTableOperationsBase {
    public void createNewDatabase(ClickHouseConnection conn, String dbName, String clusterName) throws SQLException {
        if (clusterName != null) {
            this.runQuery(String.format("CREATE DATABASE IF NOT EXISTS %s ON CLUSTER '%s'", dbName, clusterName), conn);
        } else {
            this.runQuery(String.format("CREATE DATABASE IF NOT EXISTS %s", dbName), conn);
        }
    }
}
