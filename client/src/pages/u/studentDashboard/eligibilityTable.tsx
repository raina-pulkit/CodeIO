import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { TabsContent } from "@/components/ui/tabs"

const EligibilityTable = () => {
  return (
	<TabsContent value="eligibility">
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Eligibility</CardTitle>
          <CardDescription>Eligibility Status of all courses</CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="text-center">
            <TableHeader>
              <TableRow className="bg-accent">
                <TableHead className="text-center">Course Name</TableHead>
				<TableHead className="hidden sm:table-cell text-center">
                  Score
                </TableHead>
                <TableHead className="hidden sm:table-cell text-center ">
                  Eligibility
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="text-xl">250.00</TableCell>
				<TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="destructive">
                    Not Eligible
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Olivia Smith</div>
                  <div className="hidden text-sm text-muted-foreground md:inline ">
                    olivia@example.com
                  </div>
                </TableCell>
                <TableCell className="text-xl">150.00</TableCell>
				<TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs bg-green-500 " variant="outline">
                    Eligible
                  </Badge>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="font-medium">Noah Williams</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    noah@example.com
                  </div>
                </TableCell>
                <TableCell className="text-xl">350.00</TableCell>
				<TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs bg-green-500" variant="secondary">
                    Eligible
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Emma Brown</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    emma@example.com
                  </div>
                </TableCell>
                <TableCell className="text-xl">450.00</TableCell>
				<TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs bg-green-500" variant="secondary">
                    Eligible
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="text-xl">250.00</TableCell>
				<TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs bg-green-500" variant="secondary">
                    Eligible
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Olivia Smith</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    olivia@example.com
                  </div>
                </TableCell>
                <TableCell className="text-xl">150.00</TableCell>
				<TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs bg-green-500" variant="outline">
                    Eligible
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Emma Brown</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    emma@example.com
                  </div>
                </TableCell>
                <TableCell className="text-xl">450.00</TableCell>
				<TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs bg-green-500" variant="secondary">
                    Eligible
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default EligibilityTable
