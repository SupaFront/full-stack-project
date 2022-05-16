import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import styles from './Diagram.module.css';

const COLORS = ['#FF6B01', '#D7D7D7'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = props => {
  const { cx, cy, midAngle, outerRadius, fill, percent } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius - 20) * cos;
  const sy = cy + (outerRadius - 20) * sin;
  const mx = cx + (outerRadius + 50) * cos;
  const my = cy + (outerRadius + 50) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 20;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text
        x={sx}
        y={sy}
        fill="#000000"
        textAnchor={sx > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {' '}
      </text>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={'#000000'} fill="none" />
      <circle cx={sx} cy={sy} r={2} fill={'white'} stroke="none" />
      <rect
        width="14"
        height="14"
        fill={fill}
        stroke="none"
        x={ex + (cos >= 0 ? 10 : -55)}
        y={ey + (cos >= 0 ? -10 : -10)}
      />
      <text x={ex + (cos >= 0 ? 2.7 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#555555">
        {`${props.name}`}
      </text>
    </g>
  );
};

function Diagram({ data }) {
  const desktop = window.innerWidth >= 768;

  return (
    <PieChart className={styles.pie} width={desktop ? 700 : 320} height={desktop ? 500 : 260}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={desktop ? 350 : 160}
        cy={desktop ? 250 : 130}
        outerRadius={desktop ? 142.5 : 40}
        fill="#000"
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default Diagram;
