#!/usr/bin/env python3

import os
import sys


from testflows.core import *


append_path(sys.path, "..")

from integration.helpers.argparser import argparser
from integration.helpers.common import check_clickhouse_version
from integration.helpers.common import create_cluster
from integration.requirements.requirements import *
from integration.tests.steps_global import *



xfails = {
    # "data types/date time/*": [
    #     (Fail, "https://github.com/Altinity/clickhouse-sink-connector/issues/8")
    # ],
    # "data types ac/date time/*": [
    #     (Fail, "https://github.com/Altinity/clickhouse-sink-connector/issues/8")
    # ],
    "primary keys/*": [(Fail, "GitLab CI/CD only fail")],
    #     "data consistency/*": [
    #         (Fail, "doesn't finished")
    #     ]
}
xflags = {}


@TestModule
@ArgumentParser(argparser)
@XFails(xfails)
@XFlags(xflags)
@Name("mysql to clickhouse replication")
@Requirements(RQ_SRS_030_ClickHouse_MySQLToClickHouseReplication("1.0"))
@Specifications()
def regression(
    self,
    local,
    clickhouse_binary_path,
    clickhouse_version,
    stress=None,
    thread_fuzzer=None,
    collect_service_logs=None,
):
    """ClickHouse regression for MySql to ClickHouse replication."""
    nodes = {
        "debezium": ("debezium",),
        "mysql-master": ("mysql-master",),
        "clickhouse": ("clickhouse",),
        "bash-tools": ("bash-tools",),
        "schemaregistry": ("schemaregistry",),
        "sink": ("sink",),
    }

    self.context.clickhouse_version = clickhouse_version

    if check_clickhouse_version("<21.4")(self):
        skip(reason="only supported on ClickHouse version >= 21.4")

    if stress is not None:
        self.context.stress = stress

    if collect_service_logs is not None:
        self.context.collect_service_logs = collect_service_logs

    env = "env"

    with Given("docker-compose cluster"):
        cluster = create_cluster(
            local=local,
            clickhouse_binary_path=clickhouse_binary_path,
            thread_fuzzer=thread_fuzzer,
            collect_service_logs=collect_service_logs,
            stress=stress,
            nodes=nodes,
            docker_compose_project_dir=os.path.join(current_dir(), env),
            caller_dir=os.path.join(current_dir()),
        )

    self.context.cluster = cluster

    with And("I create test database in ClickHouse"):
        create_database(name="test")

    Feature(run=load("tests.sanity", "feature"))
    # Feature(run=load("tests.types", "feature"))
    Feature(run=load("tests.types_autocreate", "feature"))
    Feature(run=load("tests.deduplication", "feature"))
    Feature(run=load("tests.primary_keys", "feature"))
    Feature(run=load("tests.autocreate", "feature"))
    Feature(run=load("tests.schema_changes", "feature"))
    # Feature(run=load("tests.insert", "feature"))
    Feature(run=load("tests.consistency", "feature"))
    Feature(run=load("tests.multiple_tables", "feature"))
    Feature(run=load("tests.virtual_columns", "feature"))
    Feature(run=load("tests.delete", "feature"))
    Feature(run=load("tests.update", "feature"))
    # Feature(run=load("tests.sysbench", "feature"))
    Feature(run=load("tests.manual_section", "feature"))


if __name__ == "__main__":
    regression()